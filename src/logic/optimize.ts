// レッスン踏み順（属性割当）の自動最適化。
//
// 評価値のパラメータ評価 = (Vo+Da+Vi + 定数) × 係数 なので、
// 上限(3000)クランプ後の合計ステータスを最大化する割当が評価値を最大化する。
// レッスン5枠 + 授業4枠 = 9枠、各3属性 → 3^9 = 19,683通りを全探索する（十分軽い）。
// 通常/SP フラグは現在の入力を維持し、属性の割当のみ最適化する。

import type { ParamType, ProduceInput } from "../types";
import { estimateStats } from "./statModel";

const STATS: ParamType[] = ["vo", "da", "vi"];

export interface LessonPlan {
  lessons: ParamType[]; // 各レッスンの属性
  classes: ParamType[]; // 各授業の属性
  vo: number;
  da: number;
  vi: number;
  total: number; // 予測合計ステ（クランプ後）
}

/** 現在の評価値（合計ステ）を測るだけのヘルパ。 */
export function planTotal(input: ProduceInput): number {
  const est = estimateStats(input);
  return est.vo + est.da + est.vi;
}

/**
 * レッスン・授業の属性割当を全探索し、合計ステ最大の踏み順を返す。
 * input 自体は変更しない（コピー上で探索）。
 */
export function optimizeLessonRouting(input: ProduceInput): LessonPlan {
  const nL = input.lessons.length;
  const nC = input.classes.length;

  // 探索用にレッスン/授業だけ差し替えたコピーを用意（他フィールドは共有で可）。
  const lessons = input.lessons.map((l) => ({ ...l }));
  const classes = [...input.classes];
  const trial: ProduceInput = { ...input, lessons, classes };

  const combos = 3 ** (nL + nC);
  let best: LessonPlan | null = null;

  for (let code = 0; code < combos; code++) {
    let c = code;
    for (let i = 0; i < nL; i++) {
      lessons[i].stat = STATS[c % 3];
      c = Math.floor(c / 3);
    }
    for (let i = 0; i < nC; i++) {
      classes[i] = STATS[c % 3];
      c = Math.floor(c / 3);
    }
    const est = estimateStats(trial);
    const total = est.vo + est.da + est.vi;
    if (!best || total > best.total) {
      best = {
        lessons: lessons.map((l) => l.stat),
        classes: [...classes],
        vo: est.vo,
        da: est.da,
        vi: est.vi,
        total,
      };
    }
  }
  return best!;
}
