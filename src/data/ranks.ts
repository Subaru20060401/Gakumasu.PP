// プロデュースランク別 必要評価値一覧。
// 出典: 仕様書添付の表（プロデューサーランク別 必要評価値一覧）。

export interface Rank {
  name: string;
  requiredValue: number;
}

/** 必要評価値の高い順に並んだランク表。 */
export const RANKS: Rank[] = [
  { name: "S5", requiredValue: 35000 },
  { name: "S4+", requiredValue: 30000 },
  { name: "S4", requiredValue: 26000 },
  { name: "SSS+", requiredValue: 23000 },
  { name: "SSS", requiredValue: 20000 },
  { name: "SS+", requiredValue: 18000 },
  { name: "SS", requiredValue: 16000 },
  { name: "S+", requiredValue: 14500 },
  { name: "S", requiredValue: 13000 },
  { name: "A+", requiredValue: 11500 },
  { name: "A", requiredValue: 10000 },
  { name: "B+", requiredValue: 8000 },
  { name: "B", requiredValue: 6000 },
  { name: "C+", requiredValue: 4500 },
  { name: "C", requiredValue: 3000 },
];

/** 評価値から到達ランクを返す（満たす最上位ランク）。 */
export function rankForValue(value: number): Rank {
  for (const rank of RANKS) {
    if (value >= rank.requiredValue) return rank;
  }
  return { name: "-", requiredValue: 0 };
}
