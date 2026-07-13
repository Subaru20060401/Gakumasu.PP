// 評価値ちぇっく：最終試験前のパラメータ等を入力し、評価値・到達ランク・
// 各ランクに必要な最終試験スコアを計算する。
// 参考: haru計算機 https://haru-1125.github.io/pages/hajime-r-calculator.html （初レジェ）。
//
// 最終パラメータ = 各stat min(上限, 試験前 + 試験終了時アビ点数 + 順位補正[160/80/40])
// 評価値 = パラメータ評価(2.1×合計) + 中間スコア評価 + 最終スコア評価 + 順位評価

import { RANKS, rankForValue } from "../data/ranks";
import { type Difficulty, PARAM_CAP } from "../types";
import {
  finalScoreEval,
  finalScoreForEval,
  isLegend,
  midScoreEval,
  rankEval as calcRankEval,
} from "./evaluation";

export interface RankCalcInput {
  // 試験前パラメータ（最終試験に入る前の表示値）。
  preVo: number;
  preDa: number;
  preVi: number;
  // 試験終了時に加算されるアビリティ点数（例: ふわもこ完凸で Da+17）。
  abiVo: number;
  abiDa: number;
  abiVi: number;
  midScore: number;
  finalScore: number;
  finalRank: number; // 1/2/3/4(不合格)
  difficulty: Difficulty;
}

/** 各ランク行（必要評価値・到達可否・必要最終スコア）。 */
export interface RankRow {
  rankName: string;
  requiredValue: number;
  reached: boolean;
  gap: number;
  requiredFinalScore: number; // このランクに必要な最終試験スコア
  reachable: boolean; // 最終スコア上限内で到達可能か
}

export interface RankCalcResult {
  finalVo: number;
  finalDa: number;
  finalVi: number;
  finalStatTotal: number; // 順位補正込みの最終合計パラメータ
  evaluationValue: number;
  paramEval: number;
  midEval: number;
  finalEval: number;
  rankEval: number;
  reachedRankName: string;
  rows: RankRow[];
}

const RANK_ADD: Record<number, number> = { 1: 160, 2: 80, 3: 40 };
const FINAL_SCORE_CAP: Record<Difficulty, number> = {
  hajime: 999_999,
  hajimeMaster: 999_999,
  hajimeLegend: 2_000_000,
};

export function calcRank(input: RankCalcInput): RankCalcResult {
  const legend = isLegend(input.difficulty);
  const cap = PARAM_CAP[input.difficulty];
  const coef = legend ? 2.1 : 2.3;
  const rankAdd = legend ? (RANK_ADD[input.finalRank] ?? 0) : 0;

  // 最終パラメータ（試験前 + アビ点数 + 順位補正、各上限クランプ）。
  const finalVo = Math.min(cap, input.preVo + input.abiVo + rankAdd);
  const finalDa = Math.min(cap, input.preDa + input.abiDa + rankAdd);
  const finalVi = Math.min(cap, input.preVi + input.abiVi + rankAdd);
  const finalStatTotal = finalVo + finalDa + finalVi;

  const paramEval = Math.floor(coef * finalStatTotal);
  const midEval = midScoreEval(input.midScore, legend);
  const finalEval = finalScoreEval(input.finalScore, legend);
  const rankEval = calcRankEval(input.finalRank);
  const evaluationValue = paramEval + midEval + finalEval + rankEval;

  const reachedRankName = rankForValue(evaluationValue).name;
  const scoreCap = FINAL_SCORE_CAP[input.difficulty];

  // 各ランクに必要な最終試験スコア（パラメータ・順位・中間を固定して逆算）。
  const fixed = paramEval + midEval + rankEval;
  const rows: RankRow[] = RANKS.map((rank) => {
    const neededFinalEval = rank.requiredValue - fixed;
    const req = finalScoreForEval(neededFinalEval, legend); // 届かない場合 Infinity
    const reachable = Number.isFinite(req) && req <= scoreCap;
    return {
      rankName: rank.name,
      requiredValue: rank.requiredValue,
      reached: evaluationValue >= rank.requiredValue,
      gap: Math.max(0, rank.requiredValue - evaluationValue),
      requiredFinalScore: reachable ? Math.max(0, Math.ceil(req)) : scoreCap,
      reachable,
    };
  });

  return {
    finalVo,
    finalDa,
    finalVi,
    finalStatTotal,
    evaluationValue,
    paramEval,
    midEval,
    finalEval,
    rankEval,
    reachedRankName,
    rows,
  };
}
