// 編成・レッスン・スケジュール → 最終ステータス（Vo/Da/Vi）の推定。
//
// レジェンドのパラメータは「レッスンの固定上昇値」が主役（得意率は直接効かない）。
//   最終st = 初期値(アイドル×凸 + メモリー + サポカ初期値アビ)
//          + ( レッスン獲得 + フラット獲得[発動回数] ) × (1 + パラボ%)
//   → パラメータ上限でクランプ
//
// レッスン上昇値: 週4/7/12/14/16 × 通常/SP。パーフェクト前提。
//   主(選択属性) = クリア + ボーナス、副(他2属性) = ボーナス。
//   ボーナスはチャレンジPアイテム上限(+90で最大)に比例。出典: レジェンドwiki。
//
// Pアイテム発動回数 = rewardPItem持ちの選択サポカ枚数+1（wiki「サポートイベント」欄で判定, 2026-07-02実データ化）。
// ⚠️ skill/enhance/delete/changeの発動回数はプラン(センス/ロジック/アノマリー×2種)別の実測が未提供のため暫定値のまま。

import { challengePItemById } from "../data/challengePItems";
import { idolById, supportById } from "../data/sampleData";
import {
  type CardContribution,
  EVENT_TRIGGERS,
  type FlatTrigger,
  type LessonSlot,
  PARAM_CAP,
  type ProduceInput,
  type SupportCard,
} from "../types";
import { memoriesContribution } from "./memory";

type Stat = "vo" | "da" | "vi";
const STATS: Stat[] = ["vo", "da", "vi"];
const clampLb = (lb: number) => Math.max(0, Math.min(4, lb));
const at = (arr: number[] | null | undefined, k: number) => (arr ? (arr[k] ?? 0) : 0);

// レッスン上昇値（5回=週4/7/12/14/16）。クリア + ボーナス(+90上限時)。
const LESSON = {
  normalClear: [60, 90, 155, 245, 395],
  normalBonus: [50, 53, 58, 75, 108],
  spClear: [85, 120, 190, 280, 455],
  spBonus: [55, 60, 70, 90, 115],
};

// 試験の順位パラメータ報酬（各ステに一律加算=「全パラメータ+N」）。出典: wiki「その他報酬」。
// レジェンドの値。中間=1位+80/2位+40、最終=1位+160/2位+80/3位+40、それ以外は0。
// ⚠️ 初/初マスターの報酬値は未提供のため未対応（レジェンドのみ加算）。判明したら難易度別テーブル化する。
const EXAM_PARAM_REWARD_LEGEND = {
  mid: { 1: 80, 2: 40 } as Record<number, number>,
  final: { 1: 160, 2: 80, 3: 40 } as Record<number, number>,
};

/** 調整パラメータ。 */
export const MODEL = {
  idolLbPerStar: 0.04,
  // スキルカード(SSR)獲得回数はプラン×おすすめ効果(6種)ごとに変わる想定。
  // 現在判明しているのは「全力」(アノマリー)のみ=10〜15枚平均で12。他5種は要提供、暫定的に同値を流用。
  skillSsrOccByEffect: {
    全力: 12,
    強気: 12,
    集中: 12,
    好調: 12,
    好印象: 12,
    やる気: 12,
  } as Record<string, number>,
  skillSsrOccDefault: 12,
  skillOcc: 8, // 通常スキルカード獲得（温存/好調など特定化カード種別ごとに変わる想定、暫定）
  enhanceOcc: 4, // スキルカード強化（暫定）
  // 削除は「Pアイテム効果による削除」＋「相談でn回踏むとn+1回削除できる」の合算。相談分のみモデル化、Pアイテム分はチャレンジ/固有アイテム側で別途カウント。
  deleteOcc: 3,
  // 交換(チェンジ)は「お出かけのトラブル追加」時に発生。お出かけ回数に比例する想定だが発生率が未提供のため暫定固定値。
  changeOcc: 3,
  customizeOcc: 4, // スキルカードカスタム時（cap=6等、上限はカード側で規定。暫定値）
  examOcc: 2, // 中間+最終
};

const eventSet = new Set(EVENT_TRIGGERS);
const r1 = (n: number) => Math.round(n * 10) / 10; // 小数第一で丸め

/** 発動契機の表示名。 */
const TRIGGER_LABEL: Record<FlatTrigger, string> = {
  lesson_normal: "通常レッスン終了時",
  lesson_sp: "SP終了時",
  odekake: "おでかけ終了時",
  shikyu: "活動支給選択時",
  sodan: "相談選択時",
  shido: "特別指導",
  jugyo: "授業終了時",
  rest: "休む時",
  exam: "試験終了時",
  drink: "ドリンク獲得時",
  sodan_drink: "相談ドリンク交換後",
  pitem: "Pアイテム獲得時",
  skill_ssr: "SSR獲得時",
  skill: "スキル獲得時",
  enhance: "強化時",
  delete: "削除時",
  change: "チェンジ時",
  customize: "カスタム時",
  init: "初期値上昇",
  other: "その他",
};
const STAT_LABEL: Record<Stat, string> = { vo: "Vo", da: "Da", vi: "Vi" };

interface Triple {
  vo: number;
  da: number;
  vi: number;
}

export interface StatEstimate {
  vo: number;
  da: number;
  vi: number;
  bonusPct: Triple; // 合算パラボ%
  bonusPctBySource: {
    idol: Triple;
    support: Triple;
    memory: Triple;
    challenge: Triple;
  };
  bonusParam: Triple; // パラボのパラメータ換算（合算）
  bonusParamBySource: {
    idol: Triple;
    support: Triple;
    memory: Triple;
    challenge: Triple;
  };
  lessonGain: Triple; // レッスン由来（参考）
  cardCount: Triple;
  contributions: CardContribution[]; // サポカ別 貢献明細
}

export function estimateStats(input: ProduceInput): StatEstimate {
  const idol = idolById(input.idolId);
  if (!idol) throw new Error("アイドルが選択されていません");

  const cap = PARAM_CAP[input.difficulty];
  const legendActive = input.difficulty === "hajimeLegend";
  const mem = memoriesContribution(input.memories);

  // パラボ% = アイドル + メモリー + チャレンジ + サポカ（内訳表示のため出典別に保持）。
  // アイドルのレッスンボーナスは才能開花で変わるため、上書き入力があれば優先。
  const bonusIdol: Record<Stat, number> = input.idolBonus ?? {
    vo: idol.bonusVo,
    da: idol.bonusDa,
    vi: idol.bonusVi,
  };
  const bonusMemory: Record<Stat, number> = { vo: mem.bonusVo, da: mem.bonusDa, vi: mem.bonusVi };
  const bonusChallenge: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };
  const bonusSupport: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };
  let challengeCap = 0;
  for (const cid of [input.challenge.slot1, input.challenge.slot2, input.challenge.slot3]) {
    const ci = challengePItemById(cid);
    if (!ci) continue;
    challengeCap += ci.lessonCap;
    if (ci.type) bonusChallenge[ci.type] += ci.paramBonusPct;
  }
  const capFactor = legendActive ? Math.min(1, challengeCap / 90) : 1;
  const passiveBonus: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };

  // 初期値（アイドル×凸 + メモリー）。
  const idolLb = 1 + MODEL.idolLbPerStar * clampLb(input.idolLimitBreak);
  const base: Record<Stat, number> = {
    vo: idol.baseVo * idolLb + mem.initVo,
    da: idol.baseDa * idolLb + mem.initDa,
    vi: idol.baseVi * idolLb + mem.initVi,
  };

  // レッスン獲得（固定上昇値, パーフェクト前提）。
  const lessonGain: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };
  input.lessons.forEach((slot: LessonSlot, i) => {
    const clear = (slot.sp ? LESSON.spClear : LESSON.normalClear)[i] ?? 0;
    const bonus = ((slot.sp ? LESSON.spBonus : LESSON.normalBonus)[i] ?? 0) * capFactor;
    for (const s of STATS) lessonGain[s] += s === slot.stat ? clear + bonus : bonus;
  });
  // 通常/SP レッスン回数（フラット発動用）。
  const lessonCount = { normal: { vo: 0, da: 0, vi: 0 }, sp: { vo: 0, da: 0, vi: 0 } };
  for (const slot of input.lessons) lessonCount[slot.sp ? "sp" : "normal"][slot.stat]++;

  // サポカのフラット獲得と初期値アビ。
  const flatGain: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };
  const initGain: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };
  const cardCount: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };
  const selected = input.supports.map((s) => supportById(s.cardId)).filter(Boolean) as SupportCard[];
  const pitemCardCount = selected.filter((c) => c.rewardPItem).length;
  const skillSsrOcc =
    MODEL.skillSsrOccByEffect[idol.recommendedEffect] ?? MODEL.skillSsrOccDefault;
  let totalDrinks = 0; // 下で算出（occurrenceのdrinkケースが参照）

  const occurrence = (trigger: FlatTrigger, tstat: Stat | "any" | undefined): number => {
    const sc = input.schedule;
    switch (trigger) {
      case "lesson_normal":
        return tstat === "any" || !tstat
          ? lessonCount.normal.vo + lessonCount.normal.da + lessonCount.normal.vi
          : lessonCount.normal[tstat];
      case "lesson_sp":
        return tstat === "any" || !tstat
          ? lessonCount.sp.vo + lessonCount.sp.da + lessonCount.sp.vi
          : lessonCount.sp[tstat];
      case "odekake":
        return sc.odekake;
      case "shikyu":
        return sc.shikyu;
      case "sodan":
        return sc.sodan;
      case "shido":
        return sc.shido;
      case "jugyo":
        return sc.jugyo;
      case "rest":
        return sc.rest;
      case "exam":
        return MODEL.examOcc;
      case "drink":
        return totalDrinks; // 全ドリンク（下で算出）
      case "sodan_drink":
        return sc.sodan > 0 ? Math.min(12, 4 * (sc.sodan + 1)) : 0; // 相談交換のみ（1相談4本+リセット, 最大12）
      case "pitem":
        return pitemCardCount + 1; // Pアイテムが付いてくるサポカの枚数+1
      case "skill_ssr":
        return skillSsrOcc;
      case "skill":
        return MODEL.skillOcc;
      case "enhance":
        return MODEL.enhanceOcc;
      case "delete":
        return MODEL.deleteOcc;
      case "change":
        return MODEL.changeOcc;
      case "customize":
        return MODEL.customizeOcc;
      case "init":
        return 1;
      default:
        return 0;
    }
  };

  // 「ドリンク獲得時」の発動回数 = 全ドリンク入手源の合計。
  //   開始1 + レッスン(各1) + 活動支給(各1) + おでかけ(各1) + 相談交換(最大12) + 固有Pアイテム生成。
  //   ※放っておけない子は「相談で交換」なので生成には含めない（drinkGen未登録）。
  const sch = input.schedule;
  // 相談1回=4本交換、リセット1回で+1機会。相談2回+リセット=4×3=12が最大。
  const sodanExchange = sch.sodan > 0 ? Math.min(12, 4 * (sch.sodan + 1)) : 0;
  const baseDrinks = 1 + input.lessons.length + sch.shikyu + sch.odekake + sodanExchange;
  let generatedDrinks = 0;
  for (const card of selected) {
    const g = card.drinkGen;
    if (!g) continue;
    let occ = occurrence(g.trigger, g.tstat);
    if (g.cap != null) occ = Math.min(g.cap, occ);
    generatedDrinks += Math.max(0, occ) * g.count;
  }
  totalDrinks = baseDrinks + generatedDrinks;

  const contributions: CardContribution[] = [];
  for (const sel of input.supports) {
    const card = supportById(sel.cardId);
    if (!card) continue;
    const k = clampLb(sel.limitBreak);
    const cc: CardContribution = { name: card.name, imageUrl: card.imageUrl, lines: [] };
    if (card.paramBonus && card.type !== "as") {
      const pb = at(card.paramBonus, k);
      bonusSupport[card.type] += pb;
      // パラボはパラメータ換算（%×そのstatのレッスン獲得）で表示。
      if (pb)
        cc.lines.push({
          label: `パラボ +${r1(pb)}%`,
          value: Math.round((pb / 100) * lessonGain[card.type]),
          stat: card.type,
        });
    }
    if (card.type !== "as") cardCount[card.type]++;
    const eventMult = 1 + at(card.eventUp, k) / 100;
    for (const f of card.flats) {
      let occ = occurrence(f.trigger, f.tstat);
      if (f.cap != null) occ = Math.min(f.cap, occ);
      if (occ <= 0) continue;
      const per = at(f.values, k);
      if (!per) continue;
      const mult = f.trigger !== "init" && eventSet.has(f.trigger) ? eventMult : 1;
      const amount = per * occ * mult;
      if (f.trigger === "init") initGain[f.stat] += amount;
      else flatGain[f.stat] += amount;
      const tstatLabel =
        (f.trigger === "lesson_sp" || f.trigger === "lesson_normal") && f.tstat && f.tstat !== "any"
          ? STAT_LABEL[f.tstat]
          : "";
      const label =
        f.trigger === "init"
          ? `${STAT_LABEL[f.stat]}初期値`
          : `${tstatLabel}${TRIGGER_LABEL[f.trigger]} +${per}×${occ}回`;
      cc.lines.push({ label, value: Math.round(amount), stat: f.stat });
    }
    if (cc.lines.length) contributions.push(cc);
  }

  for (const s of STATS) {
    passiveBonus[s] = bonusIdol[s] + bonusMemory[s] + bonusChallenge[s] + bonusSupport[s];
  }

  // 試験の順位パラメータ報酬（全ステ一律加算、パラボ非対象）。レジェンドのみ実データ有り。
  const examParamGain = legendActive
    ? (EXAM_PARAM_REWARD_LEGEND.mid[input.exam.midRank] ?? 0) +
      (EXAM_PARAM_REWARD_LEGEND.final[input.exam.finalRank] ?? 0)
    : 0;

  // パラボはレッスン上昇値に対して付与される（ユーザー定義）。
  const bonusParam: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };
  const out: Record<Stat, number> = { vo: 0, da: 0, vi: 0 };
  for (const s of STATS) {
    bonusParam[s] = (lessonGain[s] * passiveBonus[s]) / 100;
    // レッスン上昇値はレジェンド固定値なので難易度係数は掛けない。
    out[s] = Math.min(
      cap,
      Math.round(base[s] + initGain[s] + lessonGain[s] + bonusParam[s] + flatGain[s] + examParamGain),
    );
  }

  const tri = (t: Triple): Triple => ({ vo: r1(t.vo), da: r1(t.da), vi: r1(t.vi) });
  const paramFor = (b: Triple): Triple => ({
    vo: Math.round((lessonGain.vo * b.vo) / 100),
    da: Math.round((lessonGain.da * b.da) / 100),
    vi: Math.round((lessonGain.vi * b.vi) / 100),
  });
  return {
    vo: out.vo,
    da: out.da,
    vi: out.vi,
    bonusPct: tri(passiveBonus),
    bonusPctBySource: {
      idol: tri(bonusIdol),
      support: tri(bonusSupport),
      memory: tri(bonusMemory),
      challenge: tri(bonusChallenge),
    },
    bonusParam: { vo: Math.round(bonusParam.vo), da: Math.round(bonusParam.da), vi: Math.round(bonusParam.vi) },
    bonusParamBySource: {
      idol: paramFor(bonusIdol),
      support: paramFor(bonusSupport),
      memory: paramFor(bonusMemory),
      challenge: paramFor(bonusChallenge),
    },
    lessonGain: {
      vo: Math.round(lessonGain.vo),
      da: Math.round(lessonGain.da),
      vi: Math.round(lessonGain.vi),
    },
    cardCount,
    contributions,
  };
}
