// H.I.F 評価値ちぇっく。
// パラメータ＋本戦R1/R2スコア＋スター性から HIF の総合評価を計算する。
// 参考: haru計算機 hajime-r-calculator.js?v=3 (calcType='hif')。
//
// 総合評価 = floor( baseEval × 0.718 + (スター性 + 190) × 9 )
//   baseEval = パラメータ評価(2.1×合計, 各上限3200) + 本戦R1評価 + 本戦R2評価
//   本戦R1はスコア×1.2で評価。順位評価は無い。

import { RANKS, rankForValue } from "../data/ranks";

export const HIF_PARAM_CAP = 3200;
export const HIF_STAR_MAX = 1335;
export const HIF_R2_SCORE_CAP = 2_400_000;

const STAR_OFFSET = 190; // r2after入力前提の実効スター性補正
const BASE_COEF = 0.718;
const STAR_COEF = 9;

export interface HifCalcInput {
  vo: number;
  da: number;
  vi: number;
  round1Score: number;
  round2Score: number;
  star: number; // スター性 0..1335
}

export interface HifRankRow {
  rankName: string;
  requiredValue: number;
  reached: boolean;
  gap: number;
  requiredR2Score: number; // このランクに必要な本戦R2スコア
  reachable: boolean;
}

export interface HifCalcResult {
  paramEval: number;
  r1Eval: number;
  r2Eval: number;
  baseEval: number;
  starBonus: number; // (star+190)×9
  evaluationValue: number;
  reachedRankName: string;
  starFromR1: number; // 参考: R1スコアから得られるスター性
  starFromR2: number; // 参考: R2スコアから得られるスター性
  rows: HifRankRow[];
}

/** 本戦R1評価（調整後スコア=元×1.2で逓減）。 */
function r1Eval(round1Score: number): number {
  const s = Math.floor(Math.max(0, round1Score) * 1.2);
  let e: number;
  if (s <= 300000) e = 0;
  else if (s <= 700000) e = (s - 300000) * 0.01;
  else if (s <= 1000000) e = 4000 + (s - 700000) * 0.003;
  else if (s <= 1200000) e = 4900 + (s - 1000000) * 0.002;
  else if (s <= 1400000) e = 5300 + (s - 1200000) * 0.001;
  else e = 5500;
  return Math.floor(e);
}

/** 本戦R2評価。 */
function r2Eval(score: number): number {
  const s = Math.max(0, score);
  let e: number;
  if (s <= 600000) e = 0;
  else if (s <= 900000) e = (s - 600000) * 0.004;
  else if (s <= 1500000) e = 1200 + (s - 900000) * 0.008;
  else if (s <= 2000000) e = 6000 + (s - 1500000) * 0.002;
  else if (s <= 2400000) e = 7000 + (s - 2000000) * 0.001;
  else e = 7400;
  return Math.floor(e);
}

/** 評価点 → 必要R2スコア（r2Eval の逆関数。届かない場合 Infinity）。 */
function r2ScoreForEval(e: number): number {
  if (e <= 0) return 600000;
  if (e < 1200) return 600000 + e / 0.004;
  if (e < 6000) return 900000 + (e - 1200) / 0.008;
  if (e < 7000) return 1500000 + (e - 6000) / 0.002;
  if (e <= 7400) return 2000000 + (e - 7000) / 0.001;
  return Infinity;
}

/** 参考: R1スコアから得られるスター性。 */
function starFromR1(round1Score: number): number {
  const s = Math.max(0, round1Score);
  let v: number;
  if (s <= 240000) v = s * 0.00025;
  else if (s <= 360000) v = 60 + (s - 240000) * 0.0003;
  else if (s <= 600000) v = 96 + (s - 360000) * 0.0001;
  else v = 120;
  return Math.ceil(v);
}

/** 参考: R2スコアから得られるスター性。 */
function starFromR2(round2Score: number): number {
  const s = Math.max(0, round2Score);
  let v: number;
  if (s <= 400000) v = s * 0.0001875;
  else if (s <= 600000) v = 75 + (s - 400000) * 0.000225;
  else if (s <= 1000000) v = 120 + (s - 600000) * 0.000075;
  else v = 150;
  return Math.ceil(v);
}

export function calcHif(input: HifCalcInput): HifCalcResult {
  const cap = (v: number) => Math.min(HIF_PARAM_CAP, Math.max(0, v));
  const paramEval = Math.floor(2.1 * (cap(input.vo) + cap(input.da) + cap(input.vi)));
  const r1 = r1Eval(input.round1Score);
  const r2 = r2Eval(input.round2Score);
  const baseEval = paramEval + r1 + r2;
  const star = Math.min(HIF_STAR_MAX, Math.max(0, input.star));
  const starBonus = (star + STAR_OFFSET) * STAR_COEF;
  const evaluationValue = Math.floor(baseEval * BASE_COEF + starBonus);
  const reachedRankName = rankForValue(evaluationValue).name;

  // 各ランクに必要な本戦R2スコア（パラメータ・R1・スター性を固定して逆算）。
  const fixedEvalWithoutR2 = (paramEval + r1) * BASE_COEF + starBonus;
  const rows: HifRankRow[] = RANKS.map((rank) => {
    // target = floor((paramEval + r1 + r2Eval)×0.718 + starBonus) → 必要 r2Eval を逆算
    const neededR2Eval = (rank.requiredValue - fixedEvalWithoutR2) / BASE_COEF;
    const req = r2ScoreForEval(neededR2Eval);
    const reachable = Number.isFinite(req) && req <= HIF_R2_SCORE_CAP;
    return {
      rankName: rank.name,
      requiredValue: rank.requiredValue,
      reached: evaluationValue >= rank.requiredValue,
      gap: Math.max(0, rank.requiredValue - evaluationValue),
      requiredR2Score: reachable ? Math.max(0, Math.ceil(req)) : HIF_R2_SCORE_CAP,
      reachable,
    };
  });

  return {
    paramEval,
    r1Eval: r1,
    r2Eval: r2,
    baseEval,
    starBonus,
    evaluationValue,
    reachedRankName,
    starFromR1: starFromR1(input.round1Score),
    starFromR2: starFromR2(input.round2Score),
    rows,
  };
}
