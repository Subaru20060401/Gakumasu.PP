// データソース。
// サポカ・アイドル・チャレンジPアイテムは wiki 由来の実データ。
// メモリーはユーザー構成式（logic/memory.ts）。

import type { Scenario } from "../types";
import { IDOLS } from "./idols";
import { SUPPORT_CARDS } from "./supportCards";

export { IDOLS, SUPPORT_CARDS };

export const SCENARIOS: Scenario[] = [
  {
    id: "hajime_legend",
    name: "初・初レジェンド",
    description: "Version1 対応シナリオ",
    available: true,
  },
  { id: "hif", name: "H.I.F", description: "Version2 で対応予定", available: false },
  { id: "nia", name: "N.I.A", description: "新公演（対応予定）", available: false },
];

// ---- ルックアップヘルパー ----
export const idolById = (id: string | null) => IDOLS.find((x) => x.id === id) ?? null;
export const supportById = (id: string | null) => SUPPORT_CARDS.find((x) => x.id === id) ?? null;
export const scenarioById = (id: string) => SCENARIOS.find((x) => x.id === id) ?? SCENARIOS[0];
