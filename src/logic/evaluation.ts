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

// ===== 試験スコア → 評価点 =====
// レジェンドは実測式（haru計算機 https://haru-1125.github.io/pages/hajime-r-calculator.html 準拠）。
// 中間試験と最終試験で別カーブの区分線形。
// 初・初マスターの換算は未確定のため暫定の逓減テーブルを流用。

/** レジェンド中間試験スコア → 評価点。 */
function midEvalLegend(s: number): number {
  let e: number;
  if (s < 10000) e = 0.11 * s;
  else if (s < 20000) e = 1100 + 0.08 * (s - 10000);
  else if (s < 30000) e = 1900 + 0.05 * (s - 20000);
  else if (s < 40000) e = 2400 + 0.008 * (s - 30000);
  else if (s < 50000) e = 2480 + 0.003 * (s - 40000);
  else if (s < 60000) e = 2510 + 0.002 * (s - 50000);
  else if (s <= 200000) e = 2530 + 0.001 * (s - 60000);
  else e = 2670;
  return Math.floor(e);
}

/** レジェンド最終試験スコア → 評価点。 */
function finalEvalLegend(s: number): number {
  let e: number;
  if (s < 300000) e = 0.015 * s;
  else if (s < 500000) e = 4500 + 0.01 * (s - 300000);
  else if (s < 600000) e = 6500 + 0.008 * (s - 500000);
  else if (s <= 2000000) e = 7300 + 0.001 * (s - 600000);
  else e = 8700;
  return Math.floor(e);
}

/** レジェンド最終スコアの逆関数：必要評価点 → 必要最終スコア（届かない場合 Infinity）。 */
function finalScoreForEvalLegend(e: number): number {
  if (e <= 0) return 0;
  if (e < 4500) return e / 0.015;
  if (e < 6500) return 300000 + (e - 4500) / 0.01;
  if (e < 7300) return 500000 + (e - 6500) / 0.008;
  if (e <= 8700) return 600000 + (e - 7300) / 0.001;
  return Infinity; // 上限200万でも届かない
}

// 初・初マスター用の暫定逓減テーブル（未確定）。
interface Bracket {
  upTo: number;
  rate: number;
}
const EXAM_BRACKETS_NORMAL: Bracket[] = [
  { upTo: 5000, rate: 0.3 },
  { upTo: 10000, rate: 0.15 },
  { upTo: 20000, rate: 0.08 },
  { upTo: 30000, rate: 0.04 },
  { upTo: 40000, rate: 0.02 },
  { upTo: Infinity, rate: 0.01 },
];
function bracketEval(score: number, table: Bracket[]): number {
  let remaining = Math.max(0, score);
  let prev = 0;
  let total = 0;
  for (const b of table) {
    if (remaining <= 0) break;
    const used = Math.min(remaining, b.upTo - prev);
    total += used * b.rate;
    remaining -= used;
    prev = b.upTo;
  }
  return Math.round(total);
}
function bracketInverse(targetEval: number, table: Bracket[]): number {
  let remainingEval = Math.max(0, targetEval);
  let prev = 0;
  let score = 0;
  for (const b of table) {
    if (remainingEval <= 0) break;
    const span = b.upTo - prev;
    const cap = span * b.rate;
    if (remainingEval <= cap) {
      score += remainingEval / b.rate;
      remainingEval = 0;
    } else {
      score += span;
      remainingEval -= cap;
      prev = b.upTo;
    }
  }
  return Math.ceil(score);
}

/** 中間試験スコア → 評価点（レジェンドのみ加算、他は0）。 */
export function midScoreEval(score: number, legend: boolean): number {
  return legend ? midEvalLegend(Math.max(0, score)) : 0;
}

/** 最終試験スコア → 評価点。 */
export function finalScoreEval(score: number, legend: boolean): number {
  const s = Math.max(0, score);
  return legend ? finalEvalLegend(s) : bracketEval(s, EXAM_BRACKETS_NORMAL);
}

/** 評価点 → 必要最終試験スコア（finalScoreEval の逆関数。届かない場合 Infinity）。 */
export function finalScoreForEval(targetEval: number, legend: boolean): number {
  if (targetEval <= 0) return 0;
  return legend ? finalScoreForEvalLegend(targetEval) : bracketInverse(targetEval, EXAM_BRACKETS_NORMAL);
}
