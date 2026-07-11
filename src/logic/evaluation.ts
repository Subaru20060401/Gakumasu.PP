// プロデュース評価値の計算。
//
// 出典: 学マス『初』評価値計算式（コミュニティ/計算機準拠）。
//   評価値 = 順位評価 + パラメータ評価 + 試験スコア評価
//
// - 順位評価: 1位1,700 / 2位900 / 3位500
// - パラメータ評価: (Vo + Da + Vi + 各順位ボーナス) × 係数
//     係数 = 通常2.3 / レジェンド2.1
//     順位ボーナス(各ステに加算) = 通常 1位+30/2位+20/3位+10
//     レジェンドは試験順位パラメータ報酬(中間80/40・最終160/80/40)を statModel で
//     実ステに加算するため、ここの順位ボーナスは0（二重計上防止）。
// - 試験スコア評価: 最終試験スコアを逓減レートで評価点へ変換
//     レジェンドは中間試験スコアも加算（最終は別換算・上限2,000,000）

import type { Difficulty } from "../types";

export const isLegend = (d: Difficulty) => d === "hajimeLegend";

/** 順位評価点。最終試験の順位で決まる。 */
export function rankEval(finalRank: number): number {
  switch (finalRank) {
    case 1:
      return 1700;
    case 2:
      return 900;
    case 3:
      return 500;
    default:
      return 0; // 4位以下（要確認）
  }
}

/**
 * パラメータ評価の順位ボーナス（各ステータスに加算）。
 * レジェンドは試験順位パラメータ報酬(160/80/40)を statModel 側で実ステに加算済みのため、
 * ここで重ねると二重計上になる → 0。初/初マスターは実ステに乗せていないので従来通り加算。
 */
function rankParamBonus(finalRank: number, legend: boolean): number {
  if (legend) {
    return 0;
  }
  return { 1: 30, 2: 20, 3: 10 }[finalRank] ?? 0;
}

/** パラメータ評価点。 */
export function paramEval(
  vo: number,
  da: number,
  vi: number,
  finalRank: number,
  legend: boolean,
): number {
  const bonus = rankParamBonus(finalRank, legend);
  const coef = legend ? 2.1 : 2.3;
  return Math.round((vo + bonus + (da + bonus) + (vi + bonus)) * coef);
}

/** 試験スコア評価の逓減レート [上限スコア, レート/点]。 */
interface Bracket {
  upTo: number;
  rate: number;
}

// 通常（初・初マスター）の換算テーブル。
const EXAM_BRACKETS_NORMAL: Bracket[] = [
  { upTo: 5000, rate: 0.3 },
  { upTo: 10000, rate: 0.15 },
  { upTo: 20000, rate: 0.08 },
  { upTo: 30000, rate: 0.04 },
  { upTo: 40000, rate: 0.02 },
  { upTo: Infinity, rate: 0.01 },
];

// レジェンドの換算（上限: 中間20万 / 最終200万）。逓減カーブ。
// ⚠️ 第一次較正: りすさんS4(評価値26,186, 実ステから試験評価≈1万)に整合させた暫定値。
//   実スコアが判明したら要微調整（thresholds/rates）。
// 中間・最終は同じカーブを共有し、入力上限(200万/20万)で頭打ちにする。
const EXAM_BRACKETS_LEGEND: Bracket[] = [
  { upTo: 250000, rate: 0.014 },
  { upTo: 500000, rate: 0.007 },
  { upTo: 1000000, rate: 0.004 },
  { upTo: 1500000, rate: 0.002 },
  { upTo: 2000000, rate: 0.001 },
];

const brackets = (legend: boolean) =>
  legend ? EXAM_BRACKETS_LEGEND : EXAM_BRACKETS_NORMAL;

/** 試験スコア → 評価点（逓減）。 */
export function examScoreEval(score: number, legend: boolean): number {
  let remaining = Math.max(0, score);
  let prev = 0;
  let total = 0;
  for (const b of brackets(legend)) {
    if (remaining <= 0) break;
    const span = b.upTo - prev;
    const used = Math.min(remaining, span);
    total += used * b.rate;
    remaining -= used;
    prev = b.upTo;
  }
  return Math.round(total);
}

/** 評価点 → 必要スコア（examScoreEval の逆関数）。 */
export function examScoreForEval(targetEval: number, legend: boolean): number {
  let remainingEval = Math.max(0, targetEval);
  let prev = 0;
  let score = 0;
  for (const b of brackets(legend)) {
    if (remainingEval <= 0) break;
    const span = b.upTo - prev;
    const evalCapacity = span * b.rate; // この帯で稼げる評価点
    if (remainingEval <= evalCapacity) {
      score += remainingEval / b.rate;
      remainingEval = 0;
    } else {
      score += span;
      remainingEval -= evalCapacity;
      prev = b.upTo;
    }
  }
  return Math.ceil(score);
}
