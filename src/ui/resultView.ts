// 予測結果の表示。

import type { PredictionResult } from "../types";
import { h } from "./dom";

const fmt = (n: number) => n.toLocaleString("ja-JP");

function statBar(label: string, value: number, max: number, theory: number): HTMLElement {
  const pct = Math.min(100, (value / max) * 100);
  const theoryPct = Math.min(100, (theory / max) * 100);
  return h(
    "div",
    { class: "stat" },
    h("div", { class: "stat-head" }, h("span", { class: "stat-label" }, label), h("span", { class: "stat-value" }, fmt(value))),
    h(
      "div",
      { class: "stat-track" },
      h("div", { class: "stat-theory", style: `width:${theoryPct}%` }),
      h("div", { class: `stat-fill stat-${label.toLowerCase()}`, style: `width:${pct}%` }),
    ),
  );
}

function breakdownRow(label: string, value: number): HTMLElement {
  return h("div", { class: "bd-row" }, h("span", {}, label), h("span", { class: "bd-value" }, fmt(value)));
}

export function buildResult(r: PredictionResult): HTMLElement {
  const maxStat = Math.max(r.theoryVo, r.theoryDa, r.theoryVi, 1);
  const total = r.vo + r.da + r.vi;

  const targetRows = r.targets.map((t) =>
    h(
      "div",
      { class: "target-row" },
      h("span", { class: "target-rank" }, t.rankName),
      h(
        "span",
        { class: "target-detail" },
        t.reached
          ? "到達済み"
          : `あと ${fmt(t.gap)} ／ 最終試験 ${fmt(t.requiredFinalExamScore)}点`,
      ),
    ),
  );

  return h(
    "div",
    { class: "result" },
    // 到達ランク
    h(
      "div",
      { class: "rank-hero" },
      h("span", { class: "rank-hero-label" }, "到達ランク"),
      h("span", { class: "rank-hero-value" }, r.reachedRankName),
      h("span", { class: "rank-hero-eval" }, `評価値 ${fmt(r.evaluationValue)}`),
    ),
    // ステータス
    h(
      "div",
      { class: "card" },
      h("h4", {}, "予測ステータス"),
      statBar("Vo", r.vo, maxStat, r.theoryVo),
      statBar("Da", r.da, maxStat, r.theoryDa),
      statBar("Vi", r.vi, maxStat, r.theoryVi),
      h(
        "div",
        { class: "total-row" },
        h("span", {}, "合計"),
        h("span", { class: "total-value" }, fmt(total)),
      ),
      h(
        "p",
        { class: "muted small" },
        `理論値 Vo ${fmt(r.theoryVo)} / Da ${fmt(r.theoryDa)} / Vi ${fmt(r.theoryVi)}　·　最低 Vo ${fmt(r.minVo)} / Da ${fmt(r.minDa)} / Vi ${fmt(r.minVi)}`,
      ),
      h(
        "p",
        { class: "muted small" },
        `根拠: レッスン獲得 Vo${r.lessonGain.vo}/Da${r.lessonGain.da}/Vi${r.lessonGain.vi}　·　合算パラボ Vo${r.bonusPct.vo}/Da${r.bonusPct.da}/Vi${r.bonusPct.vi}%　·　サポカ Vo${r.cardCount.vo}/Da${r.cardCount.da}/Vi${r.cardCount.vi}`,
      ),
      h(
        "div",
        { class: "bonus-breakdown" },
        h(
          "div",
          { class: "bd-row bd-head" },
          h("span", {}, "パラボ内訳（%→パラメータ換算）"),
          h("span", {}, "Vo / Da / Vi"),
        ),
        ...(
          [
            ["アイドル", r.bonusPctBySource.idol, r.bonusParamBySource.idol],
            ["サポカ", r.bonusPctBySource.support, r.bonusParamBySource.support],
            ["メモリー", r.bonusPctBySource.memory, r.bonusParamBySource.memory],
            ["チャレンジP", r.bonusPctBySource.challenge, r.bonusParamBySource.challenge],
          ] as const
        ).map(([label, b, p]) =>
          h(
            "div",
            { class: "bd-row" },
            h("span", {}, label),
            h(
              "span",
              { class: "bd-value" },
              `${b.vo}/${b.da}/${b.vi}%　→ +${p.vo}/${p.da}/${p.vi}`,
            ),
          ),
        ),
        h(
          "div",
          { class: "bd-row bd-total" },
          h("span", {}, "パラボ合計（換算）"),
          h(
            "span",
            { class: "bd-value" },
            `${r.bonusPct.vo}/${r.bonusPct.da}/${r.bonusPct.vi}%　→ +${r.bonusParam.vo}/${r.bonusParam.da}/${r.bonusParam.vi}`,
          ),
        ),
      ),
    ),
    // SPレッスン発生率（属性別）
    h(
      "div",
      { class: "card" },
      h(
        "div",
        { class: "bonus-breakdown" },
        h(
          "div",
          { class: "bd-row bd-head" },
          h("span", {}, "SPレッスン発生率（アイドル＋サポカ）"),
          h("span", {}, "Vo / Da / Vi"),
        ),
        h(
          "div",
          { class: "bd-row bd-total" },
          h("span", {}, "属性別 発生率"),
          h("span", { class: "bd-value" }, `${r.spRate.vo}/${r.spRate.da}/${r.spRate.vi}%`),
        ),
      ),
      h(
        "p",
        { class: "muted small" },
        "理論値編成は全レッスンSPが前提。SPを踏める確率の目安（属性ごとの合計SP発生率）。",
      ),
    ),
    // サポカ別 貢献詳細
    r.contributions.length > 0 &&
      h(
        "div",
        { class: "card" },
        h("h4", {}, "サポカ別 貢献"),
        ...r.contributions.map((c) =>
          h(
            "details",
            { class: "contrib" },
            h(
              "summary",
              { class: "contrib-sum" },
              c.imageUrl
                ? h("img", { class: "contrib-thumb", src: c.imageUrl, alt: "", loading: "lazy" })
                : null,
              h("span", { class: "contrib-name" }, c.name),
              h(
                "span",
                { class: "contrib-total" },
                `+${fmt(c.lines.filter((l) => !l.pct).reduce((a, l) => a + l.value, 0))}`,
              ),
            ),
            ...c.lines.map((l) =>
              h(
                "div",
                { class: "contrib-line" },
                h("span", { class: `pk-badge pk-type-${l.stat}` }, l.stat.toUpperCase()),
                h("span", { class: "contrib-label" }, l.label),
                h("span", { class: "contrib-val" }, l.pct ? `+${l.value}%` : `+${fmt(l.value)}`),
              ),
            ),
          ),
        ),
        h("p", { class: "muted small" }, "※ 各値はパラボ適用前の素の獲得量。実際は合算パラボ%が上乗せされます"),
      ),
    // 評価値内訳
    h(
      "div",
      { class: "card" },
      h("h4", {}, "評価値の内訳"),
      breakdownRow("パラメータ評価", r.paramEval),
      breakdownRow("試験評価", r.examEval),
      breakdownRow("順位評価", r.rankEval),
      h("div", { class: "bd-row bd-total" }, h("span", {}, "合計評価値"), h("span", { class: "bd-value" }, fmt(r.evaluationValue))),
      h("p", { class: "muted small" }, "試験評価は入力した中間・最終スコアから算出"),
    ),
    // 上位ランクへの差
    r.targets.length > 0 &&
      h("div", { class: "card" }, h("h4", {}, "上位ランクまで"), ...targetRows),
    h(
      "p",
      { class: "disclaimer" },
      "※ 数値は仮ロジックによる暫定予測です。実際の最終ステータスは引き・イベント・プレイングに左右されます。今後、実育成データを学習して精度を上げる予定です。",
    ),
  );
}

export function buildResultPlaceholder(): HTMLElement {
  return h(
    "div",
    { class: "result placeholder" },
    h("div", { class: "placeholder-icon" }, "📊"),
    h("p", {}, "左で編成を入力して「予測開始」を押すと、ここに予測結果が表示されます。"),
  );
}
