// チャレンジPアイテム（初レジェンド）。3枠構造。
// 枠1=プランフリー共通(Vo/Da/Vi教科書+高難易度)、枠2/3=プラン別(センス/ロジック/アノマリー)。
// 出典: seesaa wiki『初』レジェンド + game8。
import type { ChallengePItem } from "../types";

export const CHALLENGE_PITEMS: ChallengePItem[] = [
 {
  "id": "free1_0",
  "name": "ボーカルの教科書",
  "plan": "free",
  "slot": 1,
  "type": "vo",
  "lessonCap": 20,
  "paramBonusPct": 8.5,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "free1_1",
  "name": "ダンスの教科書",
  "plan": "free",
  "slot": 1,
  "type": "da",
  "lessonCap": 20,
  "paramBonusPct": 8.5,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "free1_2",
  "name": "ビジュアルの教科書",
  "plan": "free",
  "slot": 1,
  "type": "vi",
  "lessonCap": 20,
  "paramBonusPct": 8.5,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "free1_3",
  "name": "ボイスレコーダー",
  "plan": "free",
  "slot": 1,
  "type": "vo",
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": "",
  "flat": {
   "stat": "vo",
   "trigger": "skill",
   "value": 15,
   "cap": 5
  }
 },
 {
  "id": "free1_4",
  "name": "ポータブルスピーカー",
  "plan": "free",
  "slot": 1,
  "type": "da",
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": "",
  "flat": {
   "stat": "da",
   "trigger": "skill",
   "value": 15,
   "cap": 5
  }
 },
 {
  "id": "free1_5",
  "name": "メイクアップミラー",
  "plan": "free",
  "slot": 1,
  "type": "vi",
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": "",
  "flat": {
   "stat": "vi",
   "trigger": "skill",
   "value": 15,
   "cap": 5
  }
 },
 {
  "id": "sense2_6",
  "name": "初星ハット（緑）",
  "plan": "sense",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "sense2_7",
  "name": "初星ボールペン（緑）",
  "plan": "sense",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "sense2_8",
  "name": "初星ハット（紫）",
  "plan": "sense",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "sense2_9",
  "name": "初星ボールペン（紫）",
  "plan": "sense",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "sense2_10",
  "name": "はつぼし手鏡（緑）",
  "plan": "sense",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "sense2_11",
  "name": "プロデュース本（緑）",
  "plan": "sense",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "sense2_12",
  "name": "はつぼし手鏡（紫）",
  "plan": "sense",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "sense2_13",
  "name": "プロデュース本（紫）",
  "plan": "sense",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "sense3_14",
  "name": "初星マーカー（橙）",
  "plan": "sense",
  "slot": 3,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "sense3_15",
  "name": "初星ステッカー（橙）",
  "plan": "sense",
  "slot": 3,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "sense3_16",
  "name": "初星ネクタイ（橙）",
  "plan": "sense",
  "slot": 3,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": ""
 },
 {
  "id": "sense3_17",
  "name": "初星名刺ケース（橙）",
  "plan": "sense",
  "slot": 3,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": ""
 },
 {
  "id": "logic2_18",
  "name": "リップグロス（黄）",
  "plan": "logic",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "logic2_19",
  "name": "初星ストラップ（黄）",
  "plan": "logic",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "logic2_20",
  "name": "リップグロス（赤）",
  "plan": "logic",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "logic2_21",
  "name": "初星ストラップ（赤）",
  "plan": "logic",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "logic2_22",
  "name": "初星チャーム（黄）",
  "plan": "logic",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "logic2_23",
  "name": "アイドルレポ（黄）",
  "plan": "logic",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "logic2_24",
  "name": "初星チャーム（赤）",
  "plan": "logic",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "logic2_25",
  "name": "アイドルレポ（赤）",
  "plan": "logic",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "logic3_26",
  "name": "初星マーカー（白）",
  "plan": "logic",
  "slot": 3,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "logic3_27",
  "name": "初星ステッカー（白）",
  "plan": "logic",
  "slot": 3,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "logic3_28",
  "name": "初星ネクタイ（白）",
  "plan": "logic",
  "slot": 3,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": ""
 },
 {
  "id": "logic3_29",
  "name": "初星名刺ケース（白）",
  "plan": "logic",
  "slot": 3,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": ""
 },
 {
  "id": "anomaly2_30",
  "name": "初星ボトル（水色）",
  "plan": "anomaly",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "anomaly2_31",
  "name": "バインダー（水色）",
  "plan": "anomaly",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "anomaly2_32",
  "name": "初星ボトル（ピンク）",
  "plan": "anomaly",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "anomaly2_33",
  "name": "バインダー（ピンク）",
  "plan": "anomaly",
  "slot": 2,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "anomaly2_34",
  "name": "イヤリング（水色）",
  "plan": "anomaly",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "anomaly2_35",
  "name": "業界レポ（水色）",
  "plan": "anomaly",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "anomaly2_36",
  "name": "イヤリング（ピンク）",
  "plan": "anomaly",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "anomaly2_37",
  "name": "業界レポ（ピンク）",
  "plan": "anomaly",
  "slot": 2,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 45,
  "note": ""
 },
 {
  "id": "anomaly3_38",
  "name": "初星マーカー（黒）",
  "plan": "anomaly",
  "slot": 3,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "anomaly3_39",
  "name": "初星ステッカー（黒）",
  "plan": "anomaly",
  "slot": 3,
  "type": null,
  "lessonCap": 20,
  "paramBonusPct": 0.0,
  "rivalScorePct": 15,
  "note": ""
 },
 {
  "id": "anomaly3_40",
  "name": "初星ネクタイ（黒）",
  "plan": "anomaly",
  "slot": 3,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": ""
 },
 {
  "id": "anomaly3_41",
  "name": "初星名刺ケース（黒）",
  "plan": "anomaly",
  "slot": 3,
  "type": null,
  "lessonCap": 30,
  "paramBonusPct": 0.0,
  "rivalScorePct": 40,
  "note": ""
 }
];

export const challengePItemById = (id: string | null) =>
  CHALLENGE_PITEMS.find((x) => x.id === id) ?? null;

/** 指定枠・プランで選べるアイテム（枠1はフリー共通）。 */
export function challengePItemsFor(slot: 1 | 2 | 3, plan: string) {
  if (slot === 1) return CHALLENGE_PITEMS.filter((x) => x.slot === 1);
  return CHALLENGE_PITEMS.filter((x) => x.slot === slot && x.plan === plan);
}
