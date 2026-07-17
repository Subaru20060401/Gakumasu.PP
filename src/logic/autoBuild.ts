// 全自動 理論値編成。
//
// 前提（理論値）:
//   - 試験スコアは上限（中間20万・最終200万）・順位1位
//   - サポカは全て完凸(凸4)、メモリーは虹+のみ、レッスンは全てSP・パーフェクト
// 最適化対象: サポカ6枚・メモリー(初期値/パラボの配分)・チャレンジPアイテム3枠・
//             レッスン踏み順・授業の属性。
//
// 探索: 評価値のパラメータ評価=(Vo+Da+Vi+定数)×係数 なので、上限クランプ後の
// 合計ステ最大化が評価値最大化と等価。サポカは C(プール,6)≈数億で全探索不能のため
// 「単体スコア貪欲初期化 → スワップ局所探索」。メモリー/チャレンジ/レッスンは全列挙。
// アイドルの得意/苦手による事前絞り込みは一切しない（フリーの強カードが得意苦手を
// 無視して採用される実態があるため、モデルの評価だけで選ぶ）。

import { challengePItemsFor } from "../data/challengePItems";
import { idolById, SUPPORT_CARDS } from "../data/sampleData";
import { MEMORY_SLOT_STATS, type ProduceInput, type SupportCard } from "../types";
import { optimizeLessonRouting } from "./optimize";
import { estimateStats } from "./statModel";

export interface AutoBuildSummary {
  total: number; // 最終合計ステ（クランプ後）
  evals: number; // estimateStats 評価回数
  ms: number;
  deck: string[]; // 採用カード名
}

const STATS = ["vo", "da", "vi"] as const;

export function autoBuild(input: ProduceInput): AutoBuildSummary {
  const t0 = performance.now();
  const idol = idolById(input.idolId);
  if (!idol) throw new Error("先にアイドルを選択してください。");

  let evals = 0;
  const score = (): number => {
    evals++;
    const e = estimateStats(input);
    return e.vo + e.da + e.vi;
  };

  // ---- 理論値前提のセットアップ ----
  input.exam = { midScore: 200_000, midRank: 1, finalScore: 2_000_000, finalRank: 1 };
  for (const s of input.supports) s.limitBreak = 4; // 完凸前提
  for (const l of input.lessons) l.sp = true; // 全SP前提

  const pool = SUPPORT_CARDS.filter((c) => c.plan === "free" || c.plan === idol.plan);

  // ---- サポカ: 単体スコアで貪欲初期化 ----
  const singleScore = new Map<string, number>();
  for (const c of pool) {
    input.supports.forEach((s, i) => (s.cardId = i === 0 ? c.id : null));
    singleScore.set(c.id, score());
  }
  const ranked = [...pool].sort((a, b) => (singleScore.get(b.id) ?? 0) - (singleScore.get(a.id) ?? 0));
  ranked.slice(0, 6).forEach((c, i) => (input.supports[i].cardId = c.id));

  // ---- 局所探索（スワップ改善） ----
  const deckSearch = () => {
    let best = score();
    for (let pass = 0; pass < 6; pass++) {
      let improved = false;
      for (let slot = 0; slot < input.supports.length; slot++) {
        const cur = input.supports[slot].cardId;
        let bestCard = cur;
        for (const c of pool) {
          if (input.supports.some((s, i) => i !== slot && s.cardId === c.id)) continue; // 重複不可
          if (c.id === cur) continue;
          input.supports[slot].cardId = c.id;
          const v = score();
          if (v > best) {
            best = v;
            bestCard = c.id;
            improved = true;
          }
        }
        input.supports[slot].cardId = bestCard;
      }
      if (!improved) break;
    }
    return best;
  };

  // ---- チャレンジPアイテム: 全列挙（6×8×4=192/プラン） ----
  const challengeSearch = () => {
    const s1 = challengePItemsFor(1, idol.plan);
    const s2 = challengePItemsFor(2, idol.plan);
    const s3 = challengePItemsFor(3, idol.plan);
    let best = -1;
    let sel = { ...input.challenge };
    for (const a of s1)
      for (const b of s2)
        for (const c of s3) {
          input.challenge = { slot1: a.id, slot2: b.id, slot3: c.id };
          const v = score();
          if (v > best) {
            best = v;
            sel = { ...input.challenge };
          }
        }
    input.challenge = sel;
    return best;
  };

  // ---- メモリー: 虹+のみ、各属性スロットの「パラボ枚数 b(0..4)」を全列挙(5^3) ----
  const memorySearch = () => {
    let best = -1;
    let bestCounts: [number, number, number] = [0, 0, 0];
    const apply = (counts: [number, number, number]) => {
      MEMORY_SLOT_STATS.forEach((_, si) => {
        input.memories.forEach((m, mi) => {
          m.abilities[si] = { kind: mi < counts[si] ? "bonus" : "init", rarity: "rainbow_plus" };
        });
      });
    };
    for (let bv = 0; bv <= 4; bv++)
      for (let bd = 0; bd <= 4; bd++)
        for (let bi = 0; bi <= 4; bi++) {
          apply([bv, bd, bi]);
          const v = score();
          if (v > best) {
            best = v;
            bestCounts = [bv, bd, bi];
          }
        }
    apply(bestCounts);
    return best;
  };

  // ---- レッスン: ラウンド中は軽量（全部同一属性×3案）、最後に全列挙 ----
  const quickLessons = () => {
    let best = -1;
    let bestStat: (typeof STATS)[number] = "vo";
    for (const st of STATS) {
      input.lessons.forEach((l) => (l.stat = st));
      input.classes = [st, st, st, st];
      const v = score();
      if (v > best) {
        best = v;
        bestStat = st;
      }
    }
    input.lessons.forEach((l) => (l.stat = bestStat));
    input.classes = [bestStat, bestStat, bestStat, bestStat];
    return best;
  };

  // ---- 座標降下: (レッスン→デッキ→チャレンジ→メモリー) ×2ラウンド ----
  quickLessons();
  for (let round = 0; round < 2; round++) {
    deckSearch();
    challengeSearch();
    memorySearch();
    quickLessons();
  }

  // ---- 仕上げ: レッスン+授業の全列挙(3^9) ----
  const plan = optimizeLessonRouting(input);
  plan.lessons.forEach((st, i) => (input.lessons[i].stat = st));
  plan.classes.forEach((st, i) => (input.classes[i] = st));
  evals += 3 ** 9;

  // 最終スコア
  const e = estimateStats(input);
  const deck = input.supports
    .map((s) => pool.find((c) => c.id === s.cardId))
    .filter(Boolean)
    .map((c) => (c as SupportCard).name);

  return {
    total: e.vo + e.da + e.vi,
    evals,
    ms: Math.round(performance.now() - t0),
    deck,
  };
}
