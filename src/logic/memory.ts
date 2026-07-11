// メモリーの寄与計算。
//
// メモリーは4個持ち込み、各メモリーは Vo/Da/Vi の3固定スロット。
// 各スロット = (なし / 初期値 / パラボ%) × (銀/金/虹/虹+)。
//   初期値: 虹+25 / 虹20 / 金15 / 銀10
//   パラボ: 虹+3.5% / 虹2.8% / 金2.1% / 銀1.4%

import {
  MEMORY_BONUS_VALUE,
  MEMORY_INIT_VALUE,
  MEMORY_SLOT_STATS,
  type Memory,
} from "../types";

export interface MemoryContribution {
  initVo: number;
  initDa: number;
  initVi: number;
  bonusVo: number; // パラボ%
  bonusDa: number;
  bonusVi: number;
}

export function memoriesContribution(memories: Memory[]): MemoryContribution {
  const c: MemoryContribution = {
    initVo: 0,
    initDa: 0,
    initVi: 0,
    bonusVo: 0,
    bonusDa: 0,
    bonusVi: 0,
  };
  for (const mem of memories) {
    mem.abilities.forEach((ab, i) => {
      if (ab.kind === "none") return;
      const stat = MEMORY_SLOT_STATS[i]; // 0=vo,1=da,2=vi
      const key = stat === "vo" ? "Vo" : stat === "da" ? "Da" : "Vi";
      if (ab.kind === "init") {
        c[`init${key}` as keyof MemoryContribution] += MEMORY_INIT_VALUE[ab.rarity];
      } else {
        c[`bonus${key}` as keyof MemoryContribution] += MEMORY_BONUS_VALUE[ab.rarity];
      }
    });
  }
  return c;
}

/** 既定のメモリー4個（各3スロット, すべて「なし」）。 */
export function defaultMemories(): Memory[] {
  return Array.from({ length: 4 }, () => ({
    abilities: [
      { kind: "none" as const, rarity: "rainbow" as const },
      { kind: "none" as const, rarity: "rainbow" as const },
      { kind: "none" as const, rarity: "rainbow" as const },
    ] as Memory["abilities"],
  }));
}
