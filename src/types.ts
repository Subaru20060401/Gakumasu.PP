// アプリ全体で使う型定義。
// 仕様書「学マス プロデュース評価予測ツール」に対応。

/** パラメータ種別。 */
export type ParamType = "vo" | "da" | "vi";

export const PARAM_LABEL: Record<ParamType, string> = {
  vo: "Vo",
  da: "Da",
  vi: "Vi",
};

export const PARAM_FULL_LABEL: Record<ParamType, string> = {
  vo: "ボーカル",
  da: "ダンス",
  vi: "ビジュアル",
};

/** サポートカードのレアリティ。 */
export type Rarity = "ssr" | "sr" | "r";

export const RARITY_LABEL: Record<Rarity, string> = {
  ssr: "SSR",
  sr: "SR",
  r: "R",
};

/** サポートカードのタイプ（Vo/Da/Vi + アシスト）。 */
export type SupportType = ParamType | "as";

export const SUPPORT_TYPE_LABEL: Record<SupportType, string> = {
  vo: "Vo",
  da: "Da",
  vi: "Vi",
  as: "As",
};

/** プラン（プロデュースの方向性）。 */
export type Plan = "sense" | "logic" | "anomaly" | "free";

export const PLAN_LABEL: Record<Plan, string> = {
  sense: "センス",
  logic: "ロジック",
  anomaly: "アノマリー",
  free: "フリー",
};

/** 難易度。 */
export type Difficulty = "hajime" | "hajimeMaster" | "hajimeLegend";

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  hajime: "初",
  hajimeMaster: "初マスター",
  hajimeLegend: "初レジェンド",
};

/** 難易度ごとの全体補正係数（仮）。 */
export const DIFFICULTY_FACTOR: Record<Difficulty, number> = {
  hajime: 0.85,
  hajimeMaster: 1.0,
  hajimeLegend: 1.12,
};

/** 難易度ごとのパラメータ上限（各ステータス）。出典: wiki『初』。 */
export const PARAM_CAP: Record<Difficulty, number> = {
  hajime: 1500,
  hajimeMaster: 1800,
  hajimeLegend: 3000, // 2026/05/16に2,800→3,000
};

/** プロデュース方針。 */
export type Policy = "evaluation" | "score" | "stable";

export const POLICY_LABEL: Record<Policy, string> = {
  evaluation: "評価盛り",
  score: "スコア重視",
  stable: "安定重視",
};

/** シナリオ（公演）。新シナリオはここに追加し、専用ロジックを紐付ける。 */
export interface Scenario {
  id: string;
  name: string;
  description: string;
  available: boolean;
}

/** アイドル（Pアイドル）。数値は初期ステータス/レッスンボーナス%。出典: wiki。 */
export interface Idol {
  id: string;
  name: string; // 【スキル名】キャラ名
  displayName: string; // 【スキル名】
  character: string; // キャラ名
  rarity: Rarity;
  plan: Plan;
  recommendedEffect: string; // おすすめ効果（好調/好印象/集中…）
  hp: number; // 初期体力
  baseVo: number;
  baseDa: number;
  baseVi: number;
  bonusVo: number; // レッスンボーナス%（才能開花3未満の値 = 最大 − 才能開花3増分）
  bonusDa: number;
  bonusVi: number;
  bloom3Vo: number; // 才能開花3で増えるレッスンボーナス%（凸3以上で加算）
  bloom3Da: number;
  bloom3Vi: number;
  uniqueSkill: string; // 固有スキルカード名
  uniqueSkillType: string; // アクティブ/メンタル
  uniqueSkillEffect: string;
  uniquePItem: string; // 固有Pアイテム名
  uniquePItemEffect: string;
  release: string;
  imageUrl?: string; // アイドルサムネ（seesaa wiki hosting）
}

/** SP発生率（凸0〜4）。 */
export interface SupportSpRate {
  stat: SupportType | "all";
  values: number[]; // [凸0..凸4] %
}

/** フラット上昇の発動契機。 */
export type FlatTrigger =
  | "lesson_normal" // 通常レッスン終了時
  | "lesson_sp" // SPレッスン終了時
  | "odekake"
  | "shikyu"
  | "sodan"
  | "shido"
  | "jugyo"
  | "rest"
  | "exam"
  | "drink" // Pドリンク獲得時（全ドリンク）
  | "sodan_drink" // 相談でPドリンク交換後（相談交換のみ）
  | "pitem" // Pアイテム獲得時
  | "skill_ssr" // スキルカード(SSR)獲得時
  | "skill" // スキルカード獲得時（各種）
  | "enhance"
  | "delete"
  | "change"
  | "customize" // スキルカードカスタム時
  | "init"
  | "other";

/** スケジュールで回数を選べる契機。 */
export const SCHEDULE_TRIGGERS: FlatTrigger[] = [
  "odekake",
  "shikyu",
  "sodan",
  "shido",
  "jugyo",
  "rest",
];

/** イベント系（eventUpで増幅される）契機。 */
export const EVENT_TRIGGERS: FlatTrigger[] = [
  "odekake",
  "shikyu",
  "sodan",
  "shido",
  "jugyo",
  "exam",
];

/** フラット上昇アビリティ（凸0〜4）。 */
export interface SupportFlat {
  stat: ParamType; // 上昇する属性 vo/da/vi
  trigger: FlatTrigger;
  tstat?: ParamType | "any"; // レッスン系の対象属性（any=全属性）
  cap: number | null; // 「(N回)」上限（無ければnull）
  values: number[]; // [凸0..凸4] 1回あたり上昇量
}

/**
 * サポートカード。各アビリティ値は凸0〜4（上限解放0〜4）の配列。
 * 出典: seesaa wiki 個別ページのサポートアビリティ表。
 */
export interface SupportCard {
  id: string;
  name: string;
  rarity: Rarity;
  type: SupportType;
  plan: Plan;
  imageUrl?: string;
  paramBonus: number[] | null; // 凸別 パラメータボーナス%（card.typeの属性）
  lessonSupport: number[] | null; // 凸別 レッスンサポート発生率%（得意率）
  eventUp: number[] | null; // 凸別 イベントによるパラメータ上昇%
  spRates: SupportSpRate[];
  flats: SupportFlat[];
  rewardPItem?: { name: string; rarity: string; plan: string }; // イベントで渡す固有Pアイテム
  rewardSkill?: { name: string; rarity: string; type: string }; // イベントで渡すスキルカード
  // 固有Pアイテムのドリンク生成（trigger発動ごとにcount個, cap回まで）。
  drinkGen?: { resource: "drink"; trigger: FlatTrigger; tstat?: ParamType | "any"; count: number; cap: number | null };
  // 固有Pアイテムのパラメータ上昇（条件は達成前提で計算, 凸非依存の固定値）。
  pItemFlat?: { stat: ParamType; trigger: FlatTrigger; tstat?: ParamType | "any"; value: number; cap: number | null };
  // サポートイベント（1プロデュース1回発生）のパラメータ。eventUpで増幅（SSR20/SR15/R10）。
  supportEvent?: { stat: ParamType; value: number };
  // サポートイベント／固有Pアイテムが付与する削除・強化・チェンジのアクション回数。
  // 「削除時+X」等のアビリティ発動回数（相談ベース＋これ）に加算する。
  eventGrants?: { delete?: number; enhance?: number; change?: number };
}

/** メモリーアビリティのレアリティ（虹+/虹/金/銀）。 */
export type MemoryRarity = "rainbow_plus" | "rainbow" | "gold" | "silver";

export const MEMORY_RARITY_LABEL: Record<MemoryRarity, string> = {
  rainbow_plus: "虹+",
  rainbow: "虹",
  gold: "金",
  silver: "銀",
};

export const MEMORY_RARITIES: MemoryRarity[] = ["rainbow_plus", "rainbow", "gold", "silver"];

/** メモリーアビリティの種別（なし / 初期値 / パラボ%）。 */
export type MemoryKind = "none" | "init" | "bonus";

export const MEMORY_KIND_LABEL: Record<MemoryKind, string> = {
  none: "なし",
  init: "初期値",
  bonus: "パラボ",
};

/**
 * メモリーの1アビリティ枠。属性はスロット位置で固定（0=Vo, 1=Da, 2=Vi）。
 * kind=none は未装備。
 */
export interface MemoryAbility {
  kind: MemoryKind;
  rarity: MemoryRarity;
}

/** メモリー1個。アビリティは Vo/Da/Vi の3固定スロット。 */
export interface Memory {
  abilities: [MemoryAbility, MemoryAbility, MemoryAbility]; // [Vo, Da, Vi]
}

/** スロット位置と属性の対応。 */
export const MEMORY_SLOT_STATS: ParamType[] = ["vo", "da", "vi"];

/** レアリティ別の初期値。出典: wiki 効果詳細。 */
export const MEMORY_INIT_VALUE: Record<MemoryRarity, number> = {
  rainbow_plus: 25,
  rainbow: 20,
  gold: 15,
  silver: 10,
};

/** レアリティ別のパラボ%。 */
export const MEMORY_BONUS_VALUE: Record<MemoryRarity, number> = {
  rainbow_plus: 3.5,
  rainbow: 2.8,
  gold: 2.1,
  silver: 1.4,
};

/** チャレンジPアイテム。3枠（枠1=フリー共通、枠2/3=プラン別）。 */
export interface ChallengePItem {
  id: string;
  name: string;
  plan: Plan; // free/sense/logic/anomaly
  slot: 1 | 2 | 3;
  type: ParamType | null; // vo/da/vi（プラン別は多くnull）
  lessonCap: number; // レッスン上限+
  paramBonusPct: number; // パラメータボーナス%
  rivalScorePct: number; // ライバルスコア増加%
  note: string;
  flat?: { stat: ParamType; trigger: FlatTrigger; value: number; cap: number | null }; // 高難易度: スキル獲得時+15 等
}

/** サポカ1枠分の選択状態（カード + 凸数0〜4）。 */
export interface SupportSelection {
  cardId: string | null;
  limitBreak: number; // 0〜4
}

/** レッスン1回分（属性 + 通常/SP）。5回は週4/7/12/14/16に対応。 */
export interface LessonSlot {
  stat: ParamType;
  sp: boolean; // true=SPレッスン
}

/** スケジュールで選べる行動の回数。 */
export interface Schedule {
  odekake: number;
  shikyu: number;
  sodan: number;
  shido: number;
  jugyo: number;
  rest: number;
}

/** 試験（スコア・順位はユーザー入力）。 */
export interface ExamInput {
  midScore: number;
  midRank: number;
  finalScore: number;
  finalRank: number;
}

/** 入力全体。 */
export interface ProduceInput {
  scenarioId: string;
  idolId: string | null;
  idolBonus: { vo: number; da: number; vi: number } | null; // レッスンボーナス%上書き（才能開花で変わる）
  idolLimitBreak: number; // 0〜4
  supports: SupportSelection[]; // 6枠
  memories: Memory[]; // 4個 × アビリティ3つ
  challenge: { slot1: string | null; slot2: string | null; slot3: string | null };
  lessons: LessonSlot[]; // 5回のレッスン（週4/7/12/14/16, 属性+通常/SP）
  classes: ParamType[]; // 授業4回（週1/2/6/15, 上昇値100/100/150/200）の属性
  schedule: Schedule;
  exam: ExamInput;
  difficulty: Difficulty;
}

/** ある目標ランクへの到達情報。 */
export interface RankTarget {
  rankName: string;
  requiredValue: number;
  gap: number; // 評価値の不足分（0なら到達済み）
  requiredFinalExamScore: number; // そのランクに必要な最終試験スコア（仮）
  reached: boolean;
}

/** サポカ1枚ぶんの貢献明細。 */
export interface CardContribution {
  name: string;
  imageUrl?: string;
  lines: { label: string; value: number; pct?: boolean; stat: ParamType }[];
}

/** 予測結果。 */
export interface PredictionResult {
  vo: number;
  da: number;
  vi: number;
  theoryVo: number;
  theoryDa: number;
  theoryVi: number;
  minVo: number;
  minDa: number;
  minVi: number;
  paramEval: number; // パラメータ評価
  examEval: number; // 試験評価（中間+最終の入力スコア）
  rankEval: number; // 順位評価（最終順位）
  evaluationValue: number; // 合計評価値
  reachedRankName: string;
  targets: RankTarget[];
  // 予測の根拠（透明性表示用）。
  bonusPct: { vo: number; da: number; vi: number };
  bonusPctBySource: {
    idol: { vo: number; da: number; vi: number };
    support: { vo: number; da: number; vi: number };
    memory: { vo: number; da: number; vi: number };
    challenge: { vo: number; da: number; vi: number };
  };
  bonusParam: { vo: number; da: number; vi: number };
  bonusParamBySource: {
    idol: { vo: number; da: number; vi: number };
    support: { vo: number; da: number; vi: number };
    memory: { vo: number; da: number; vi: number };
    challenge: { vo: number; da: number; vi: number };
  };
  lessonGain: { vo: number; da: number; vi: number };
  cardCount: { vo: number; da: number; vi: number };
  contributions: CardContribution[];
  spRate: { vo: number; da: number; vi: number }; // 属性別SPレッスン発生率%
}
