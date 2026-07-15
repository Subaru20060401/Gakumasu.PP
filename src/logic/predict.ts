// 予測ロジック。
//
// ステータス(Vo/Da/Vi)は編成・レッスン・スケジュールから予測（statModel）。
// 試験スコア・順位はユーザー入力。評価値は実データ式で合成する：
//   評価値 = パラメータ評価(予測ステ) + 試験評価(中間+最終スコア) + 順位評価(最終順位)

import { RANKS, rankForValue } from "../data/ranks";
import { type PredictionResult, type ProduceInput, type RankTarget } from "../types";
import {
  finalScoreEval,
  finalScoreForEval,
  isLegend,
  midScoreEval,
  paramEval as calcParamEval,
  rankEval as calcRankEval,
} from "./evaluation";
import { estimateStats } from "./statModel";

const SPREAD = 0.05; // 理論値/最低のブレ幅

export function predict(input: ProduceInput): PredictionResult {
  const legend = isLegend(input.difficulty);
  const round = Math.round;

  // 編成 → 最終ステータス推定。
  const est = estimateStats(input);
  const { vo, da, vi } = est;

  const { midScore, finalScore, finalRank } = input.exam;

  // 評価値内訳（順位評価 + パラメータ評価 + 試験スコア評価）。
  const rankEval = calcRankEval(finalRank);
  const paramEval = calcParamEval(vo, da, vi, finalRank, legend);
  const midEval = midScoreEval(midScore, legend);
  const examEval = finalScoreEval(finalScore, legend) + midEval;
  const evaluationValue = paramEval + examEval + rankEval;

  const reachedRank = rankForValue(evaluationValue);

  // 上位ランクへの到達情報（必要最終試験スコアを逆算）。
  const targets: RankTarget[] = [];
  for (let i = RANKS.length - 1; i >= 0; i--) {
    const rank = RANKS[i];
    if (rank.requiredValue <= reachedRank.requiredValue) continue;
    const neededFinalExamEval = rank.requiredValue - paramEval - rankEval - midEval;
    const requiredFinalExamScore = finalScoreForEval(neededFinalExamEval, legend);
    targets.push({
      rankName: rank.name,
      requiredValue: rank.requiredValue,
      gap: Math.max(0, rank.requiredValue - evaluationValue),
      requiredFinalExamScore,
      reached: evaluationValue >= rank.requiredValue,
    });
  }
  targets.sort((a, b) => a.requiredValue - b.requiredValue);

  return {
    vo,
    da,
    vi,
    theoryVo: round(vo * (1 + SPREAD)),
    theoryDa: round(da * (1 + SPREAD)),
    theoryVi: round(vi * (1 + SPREAD)),
    minVo: round(vo * (1 - SPREAD)),
    minDa: round(da * (1 - SPREAD)),
    minVi: round(vi * (1 - SPREAD)),
    paramEval,
    examEval,
    rankEval,
    evaluationValue,
    reachedRankName: reachedRank.name,
    targets: targets.slice(0, 4),
    bonusPct: est.bonusPct,
    bonusPctBySource: est.bonusPctBySource,
    bonusParam: est.bonusParam,
    bonusParamBySource: est.bonusParamBySource,
    lessonGain: est.lessonGain,
    classGain: est.classGain,
    cardCount: est.cardCount,
    contributions: est.contributions,
    spRate: est.spRate,
  };
}
