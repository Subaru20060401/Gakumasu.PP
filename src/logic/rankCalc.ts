// スコア＆パラメータ直接入力 → 評価値・到達ランク・各ランク必要最終スコアを計算する。
//
// 「編成から予測」モードとは別の軽量モード。主に最終試験前に
// 「目標評価値に届くには最終試験で何点必要か」を逆算するために使う。
// 出力の評価値式は evaluation.ts（実データ準拠）をそのまま利用する。

import { RANKS, rankForValue } from "../data/ranks";
import type { Difficulty, ExamInput } from "../types";
import {
  examScoreEval,
  examScoreForEval,
  isLegend,
  paramEval as calcParamEval,
  rankEval as calcRankEval,
} from "./evaluation";

export interface RankCalcInput {
  vo: number;
  da: number;
  vi: number;
  exam: ExamInput;
  difficulty: Difficulty;
}

/** 各ランク行（必要評価値・到達可否・必要最終スコア）。 */
export interface RankRow {
  rankName: string;
  requiredValue: number;
  reached: boolean; // 現在の入力（最終スコア込み）で到達済みか
  gap: number; // 不足評価値（0なら到達済み）
  requiredFinalScore: number; // このランクに必要な最終試験スコア
  reachable: boolean; // 最終スコア上限内で到達可能か
}

export interface RankCalcResult {
  evaluationValue: number;
  paramEval: number;
  examEval: number; // 中間＋最終
  midEval: number;
  rankEval: number;
  reachedRankName: string;
  finalScoreCap: number; // 最終試験スコアの上限
  rows: RankRow[];
}

const FINAL_SCORE_CAP: Record<Difficulty, number> = {
  hajime: 999_999,
  hajimeMaster: 999_999,
  hajimeLegend: 2_000_000,
};

export function calcRank(input: RankCalcInput): RankCalcResult {
  const legend = isLegend(input.difficulty);
  const { vo, da, vi } = input;
  const { midScore, finalScore, finalRank } = input.exam;

  const rankEval = calcRankEval(finalRank);
  const paramEval = calcParamEval(vo, da, vi, finalRank, legend);
  const midEval = legend ? examScoreEval(midScore, legend) : 0;
  const examEval = examScoreEval(finalScore, legend) + midEval;
  const evaluationValue = paramEval + examEval + rankEval;

  const reachedRankName = rankForValue(evaluationValue).name;
  const cap = FINAL_SCORE_CAP[input.difficulty];
  // 最終試験スコアを上限まで盛った時に稼げる評価点（逓減の頭打ち）。
  const maxFinalEval = examScoreEval(cap, legend);

  // 各ランクへ必要な最終試験スコア（現在のパラメータ・順位・中間スコアを固定して逆算）。
  const fixed = paramEval + rankEval + midEval;
  const rows: RankRow[] = RANKS.map((rank) => {
    const neededFinalEval = rank.requiredValue - fixed;
    // 上限スコアでも評価点が足りなければ到達不可（examScoreForEval は上限で頭打ちになるため別途判定）。
    const reachable = neededFinalEval <= maxFinalEval;
    const requiredFinalScore = reachable ? Math.max(0, examScoreForEval(neededFinalEval, legend)) : cap;
    return {
      rankName: rank.name,
      requiredValue: rank.requiredValue,
      reached: evaluationValue >= rank.requiredValue,
      gap: Math.max(0, rank.requiredValue - evaluationValue),
      requiredFinalScore,
      reachable,
    };
  });

  return {
    evaluationValue,
    paramEval,
    examEval,
    midEval,
    rankEval,
    reachedRankName,
    finalScoreCap: cap,
    rows,
  };
}
