// 編成入力フォーム。
// 選択順: アイドル → サポカ → メモリー → チャレンジPアイテム → レッスン/スケジュール → 試験。
// アイドルのプランで サポカ/チャレンジ を絞り込み、サポカは重複選択不可。

import { challengePItemsFor } from "../data/challengePItems";
import { idolById, IDOLS, SUPPORT_CARDS } from "../data/sampleData";
import {
  DIFFICULTY_LABEL,
  MEMORY_BONUS_VALUE,
  MEMORY_INIT_VALUE,
  MEMORY_SLOT_STATS,
  PLAN_LABEL,
  RARITY_LABEL,
  SUPPORT_TYPE_LABEL,
  type Difficulty,
  type Idol,
  type Memory,
  type MemoryAbility,
  type MemoryRarity,
  type ParamType,
  type Plan,
  type ProduceInput,
  type SupportCard,
} from "../types";
import { h, segmented } from "./dom";
import { statIconEl } from "./icons";
import { picker, type PickerItem } from "./picker";

const LB = [0, 1, 2, 3, 4]; // 上限解放0〜4
const STAT_OPTS: { value: ParamType; label: string }[] = [
  { value: "vo", label: "Vo" },
  { value: "da", label: "Da" },
  { value: "vi", label: "Vi" },
];
const TYPE_JP: Record<string, string> = { vo: "ボーカル", da: "ダンス", vi: "ビジュアル", as: "アシスト" };

function field(label: string, control: Node): HTMLElement {
  return h("label", { class: "field" }, h("span", { class: "field-label" }, label), control);
}
function sectionTitle(text: string): HTMLElement {
  return h("h3", { class: "section-title" }, text);
}

function idolItem(i: Idol): PickerItem {
  return {
    value: i.id,
    title: `${i.character}｜${i.displayName}`,
    subtitle: `固有: ${i.uniqueSkill}`,
    badges: [
      { text: RARITY_LABEL[i.rarity], kind: `rar-${i.rarity}` },
      { text: PLAN_LABEL[i.plan], kind: `plan-${i.plan}` },
      { text: i.recommendedEffect, kind: "eff" },
    ],
    keywords:
      `${i.character} ${i.displayName} ${RARITY_LABEL[i.rarity]} ${PLAN_LABEL[i.plan]} ${i.recommendedEffect}`.toLowerCase(),
    imageUrl: i.imageUrl,
  };
}
function supportItem(c: SupportCard): PickerItem {
  return {
    value: c.id,
    title: c.name,
    badges: [
      { text: RARITY_LABEL[c.rarity], kind: `rar-${c.rarity}` },
      { text: SUPPORT_TYPE_LABEL[c.type], kind: `type-${c.type}` },
      { text: PLAN_LABEL[c.plan], kind: `plan-${c.plan}` },
    ],
    keywords:
      `${c.name} ${RARITY_LABEL[c.rarity]} ${SUPPORT_TYPE_LABEL[c.type]} ${TYPE_JP[c.type]} ${PLAN_LABEL[c.plan]}`.toLowerCase(),
    imageUrl: c.imageUrl,
  };
}
const IDOL_ITEMS = IDOLS.map(idolItem);

/** 数値入力（ステッパー）。 */
function numberField(
  label: string,
  value: number,
  onChange: (v: number) => void,
  opts: { min?: number; max?: number; step?: number } = {},
): HTMLElement {
  const input = h("input", {
    class: "num-input",
    type: "number",
    value: String(value),
    min: opts.min != null ? String(opts.min) : undefined,
    max: opts.max != null ? String(opts.max) : undefined,
    step: opts.step != null ? String(opts.step) : "1",
    oninput: (e: Event) => onChange(Number((e.target as HTMLInputElement).value) || 0),
  }) as HTMLInputElement;
  return h("label", { class: "num-field" }, h("span", { class: "field-label" }, label), input);
}

export function buildInputForm(input: ProduceInput, onSubmit: () => void): HTMLElement {
  const form = h("form", {
    class: "input-form",
    onsubmit: (e: Event) => {
      e.preventDefault();
      onSubmit();
    },
  });

  const submitBtn = h(
    "button",
    { type: "submit", class: "predict-btn", disabled: !input.idolId },
    "⑧ 予測開始",
  ) as HTMLButtonElement;

  const plan = (): Plan | null => idolById(input.idolId)?.plan ?? null;

  // ---- ③ サポートカード（プラン絞込 + 重複禁止） ----
  const supportBox = h("div", {});
  function renderSupports() {
    const p = plan();
    const allowed = SUPPORT_CARDS.filter((c) => !p || c.plan === "free" || c.plan === p);
    const chosen = new Set(input.supports.map((s) => s.cardId).filter(Boolean) as string[]);
    const rows = input.supports.map((sel, i) => {
      const items = allowed
        .filter((c) => c.id === sel.cardId || !chosen.has(c.id))
        .map(supportItem);
      const cardPicker = picker({
        items,
        value: sel.cardId,
        placeholder: "サポートカードを選択",
        noneLabel: "（未選択）",
        onSelect: (v) => {
          sel.cardId = v;
          renderSupports(); // 重複除外を更新
        },
      });
      const lb = segmented(
        LB.map((n) => ({ value: n, label: `${n}` })),
        sel.limitBreak,
        (v) => (sel.limitBreak = v),
      );
      return h(
        "div",
        { class: "support-row" },
        h("div", { class: "support-index" }, `${i + 1}`),
        h(
          "div",
          { class: "support-controls" },
          cardPicker,
          h("div", { class: "support-lb" }, h("span", { class: "lb-label" }, "凸"), lb),
        ),
      );
    });
    supportBox.replaceChildren(...rows);
  }

  // ---- ⑥ チャレンジPアイテム（3枠, プラン別） ----
  const challengeBox = h("div", {});
  function renderChallenge() {
    const p = plan();
    const slots: (1 | 2 | 3)[] = [1, 2, 3];
    const keys = ["slot1", "slot2", "slot3"] as const;
    const rows = slots.map((slot, idx) => {
      const items = challengePItemsFor(slot, p ?? "free").map((ci) => ({
        value: ci.id,
        title: ci.name,
        badges: [
          slot === 1
            ? { text: "フリー", kind: "plan-free" }
            : { text: PLAN_LABEL[ci.plan], kind: `plan-${ci.plan}` },
          ci.type ? { text: SUPPORT_TYPE_LABEL[ci.type], kind: `type-${ci.type}` } : null,
          { text: `上限+${ci.lessonCap}`, kind: "eff" },
          ci.paramBonusPct ? { text: `パラボ+${ci.paramBonusPct}%`, kind: "eff" } : null,
        ].filter(Boolean) as PickerItem["badges"],
        keywords: `${ci.name} ${PLAN_LABEL[ci.plan]}`.toLowerCase(),
      }));
      const key = keys[idx];
      return field(
        `${slot}枠目${slot === 1 ? "（フリー共通）" : "（プラン別）"}`,
        picker({
          items,
          value: input.challenge[key],
          placeholder: slot > 1 && !p ? "先にアイドルを選択" : "アイテムを選択",
          noneLabel: "（なし）",
          onSelect: (v) => (input.challenge[key] = v),
        }),
      );
    });
    challengeBox.replaceChildren(...rows);
  }

  // アイドルのレッスンボーナス%（才能開花で変わるので編集可）。
  const idolBonusBox = h("div", {});
  function renderIdolBonus() {
    const idol = idolById(input.idolId);
    if (!idol || !input.idolBonus) {
      idolBonusBox.replaceChildren();
      return;
    }
    const b = input.idolBonus;
    idolBonusBox.replaceChildren(
      h("p", { class: "field-label" }, "レッスンボーナス%（才能開花で変わる・実カードに合わせて調整可）"),
      h(
        "div",
        { class: "sched-grid" },
        numberField("Vo", b.vo, (v) => (b.vo = v), { min: 0, step: 0.5 }),
        numberField("Da", b.da, (v) => (b.da = v), { min: 0, step: 0.5 }),
        numberField("Vi", b.vi, (v) => (b.vi = v), { min: 0, step: 0.5 }),
      ),
    );
  }

  function onIdolChange() {
    submitBtn.disabled = !input.idolId;
    const idol = idolById(input.idolId);
    input.idolBonus = idol ? { vo: idol.bonusVo, da: idol.bonusDa, vi: idol.bonusVi } : null;
    const p = plan();
    // プラン不一致のサポカ/チャレンジをクリア。
    for (const s of input.supports) {
      const c = SUPPORT_CARDS.find((x) => x.id === s.cardId);
      if (c && p && c.plan !== "free" && c.plan !== p) s.cardId = null;
    }
    input.challenge.slot2 = null;
    input.challenge.slot3 = null;
    renderIdolBonus();
    renderSupports();
    renderChallenge();
  }

  // ① アイドル
  form.append(sectionTitle("① アイドル（プランが決まります）"));
  form.append(
    field(
      "アイドルを選択（タップで検索）",
      picker({
        items: IDOL_ITEMS,
        value: input.idolId,
        placeholder: "アイドルを選択",
        onSelect: (v) => {
          input.idolId = v;
          onIdolChange();
        },
      }),
    ),
  );
  form.append(idolBonusBox);
  form.append(
    field(
      "② 凸数（上限解放）",
      segmented(
        LB.map((n) => ({ value: n, label: `${n}凸` })),
        input.idolLimitBreak,
        (v) => (input.idolLimitBreak = v),
      ),
    ),
  );

  // ③ サポカ
  form.append(sectionTitle("③ サポートカード（6枚・重複不可）"));
  form.append(supportBox);

  // ④ メモリー（4個 × Vo/Da/Vi の3固定スロット）
  form.append(sectionTitle("④ メモリー（4個・Vo/Da/Vi枠）"));
  input.memories.forEach((mem, mi) => {
    form.append(memoryCard(mem, mi));
  });

  // ⑥ チャレンジPアイテム
  form.append(sectionTitle("⑤ チャレンジPアイテム（3枠）"));
  form.append(challengeBox);

  // ⑦ レッスン（5回・週4/7/12/14/16・通常/SP）
  form.append(sectionTitle("⑥ レッスン（5回・属性＋通常/SP）"));
  const WEEKS = [4, 7, 12, 14, 16];
  input.lessons.forEach((slot, i) => {
    const statSeg = segmented(STAT_OPTS, slot.stat, (v) => (slot.stat = v));
    const spSeg = segmented<string>(
      [
        { value: "normal", label: "通常" },
        { value: "sp", label: "SP" },
      ],
      slot.sp ? "sp" : "normal",
      (v) => (slot.sp = v === "sp"),
    );
    form.append(
      h(
        "div",
        { class: "lesson-row" },
        h("span", { class: "lesson-week" }, `${i + 1}回目(${WEEKS[i]}週)`),
        statSeg,
        spSeg,
      ),
    );
  });

  // ⑧ スケジュール
  form.append(sectionTitle("⑦ スケジュール（おでかけ・活動支給など）"));
  form.append(schedulePresets(input));
  const schedGrid = h(
    "div",
    { class: "sched-grid" },
    numberField("おでかけ", input.schedule.odekake, (v) => (input.schedule.odekake = v), { min: 0, max: 18 }),
    numberField("活動支給", input.schedule.shikyu, (v) => (input.schedule.shikyu = v), { min: 0, max: 18 }),
    numberField("相談", input.schedule.sodan, (v) => (input.schedule.sodan = v), { min: 0, max: 18 }),
    numberField("特別指導", input.schedule.shido, (v) => (input.schedule.shido = v), { min: 0, max: 18 }),
    numberField("授業", input.schedule.jugyo, (v) => (input.schedule.jugyo = v), { min: 0, max: 18 }),
    numberField("休む", input.schedule.rest, (v) => (input.schedule.rest = v), { min: 0, max: 18 }),
  );
  // presetから数値を書き換えたら再描画するため、schedGridをboxに入れて再生成。
  const schedBox = h("div", {}, schedGrid);
  schedBox.dataset.grid = "1";
  form.append(schedBox);

  // ⑨ 試験（ユーザー入力）
  form.append(sectionTitle("⑧ 試験（スコア・順位を入力）"));
  form.append(
    h(
      "div",
      { class: "sched-grid" },
      numberField("中間 スコア(上限20万)", input.exam.midScore, (v) => (input.exam.midScore = v), { min: 0, max: 200000, step: 1000 }),
      numberField("中間 順位", input.exam.midRank, (v) => (input.exam.midRank = v), { min: 1, max: 20 }),
      numberField("最終 スコア(上限200万)", input.exam.finalScore, (v) => (input.exam.finalScore = v), { min: 0, max: 2000000, step: 1000 }),
      numberField("最終 順位", input.exam.finalRank, (v) => (input.exam.finalRank = v), { min: 1, max: 20 }),
    ),
  );

  // ⑩ 難易度
  form.append(sectionTitle("難易度"));
  form.append(
    segmented(
      (Object.keys(DIFFICULTY_LABEL) as Difficulty[]).map((d) => ({ value: d, label: DIFFICULTY_LABEL[d] })),
      input.difficulty,
      (v) => (input.difficulty = v),
    ),
  );

  form.append(submitBtn);

  renderSupports();
  renderChallenge();
  return form;
}

// 表示順（銀→金→虹→虹+）。
const RARITY_ASC: MemoryRarity[] = ["silver", "gold", "rainbow", "rainbow_plus"];

/** メモリー1個（Vo/Da/Vi の3スロット）。 */
function memoryCard(mem: Memory, index: number): HTMLElement {
  const box = h("div", { class: "memory-card" }, h("div", { class: "memory-head" }, `メモリー${index + 1}`));
  mem.abilities.forEach((ab, i) => box.append(memorySlot(ab, MEMORY_SLOT_STATS[i])));
  return box;
}

/** 1スロット = 固定属性アイコン + 「なし/初期値4/パラボ4」のチップ選択。 */
function memorySlot(ab: MemoryAbility, stat: ParamType): HTMLElement {
  const chipWrap = h("div", { class: "mem-chips" });
  const render = () => {
    const chips: HTMLElement[] = [];
    // なし
    chips.push(chipEl("mem-chip mem-chip-none", "なし", ab.kind === "none", () => {
      ab.kind = "none";
      render();
    }));
    for (const kind of ["init", "bonus"] as const) {
      // パラボ行は「なし」の下（1列目）を空けてレア度を初期値と縦に揃える。
      if (kind === "bonus") chips.push(h("span", { class: "mem-chip-spacer" }));
      for (const rarity of RARITY_ASC) {
        const val = kind === "init" ? `${MEMORY_INIT_VALUE[rarity]}` : `${MEMORY_BONUS_VALUE[rarity]}%`;
        const selected = ab.kind === kind && ab.rarity === rarity;
        chips.push(
          chipEl(`mem-chip rar-${rarity} ${kind === "bonus" ? "is-bonus" : "is-init"}`, val, selected, () => {
            ab.kind = kind;
            ab.rarity = rarity;
            render();
          }),
        );
      }
    }
    chipWrap.replaceChildren(...chips);
  };
  render();
  return h(
    "div",
    { class: "mem-slot" },
    statIconEl(stat),
    h("span", { class: "mem-slot-label" }, STAT_LABEL_JP[stat]),
    chipWrap,
  );
}

const STAT_LABEL_JP: Record<ParamType, string> = { vo: "Vo", da: "Da", vi: "Vi" };

function chipEl(cls: string, label: string, selected: boolean, onClick: () => void): HTMLElement {
  return h(
    "button",
    { type: "button", class: `${cls}${selected ? " selected" : ""}`, onclick: onClick },
    label,
  );
}

/** スケジュールのプリセットボタン群。値を書き換えて画面を再構築させる。 */
function schedulePresets(input: ProduceInput): HTMLElement {
  const apply = (s: Partial<ProduceInput["schedule"]>) => {
    input.schedule = { odekake: 0, shikyu: 0, sodan: 0, shido: 0, jugyo: 0, rest: 0, ...s };
    // 数値入力に反映（DOM側を更新）。
    const grid = document.querySelector<HTMLElement>('[data-grid="1"] .sched-grid');
    if (grid) {
      const vals = [
        input.schedule.odekake,
        input.schedule.shikyu,
        input.schedule.sodan,
        input.schedule.shido,
        input.schedule.jugyo,
        input.schedule.rest,
      ];
      grid.querySelectorAll<HTMLInputElement>("input").forEach((el, i) => {
        el.value = String(vals[i]);
      });
    }
  };
  const btn = (label: string, s: Partial<ProduceInput["schedule"]>) =>
    h("button", { type: "button", class: "seg", onclick: () => apply(s) }, label);
  return h(
    "div",
    { class: "preset-row" },
    btn("活動支給4+相談", { shikyu: 4, sodan: 1 }),
    btn("おでかけ4+相談", { odekake: 4, sodan: 1 }),
    btn("活支2+おで2+相談", { shikyu: 2, odekake: 2, sodan: 1 }),
    btn("特別指導版", { shikyu: 4, shido: 1 }),
  );
}
