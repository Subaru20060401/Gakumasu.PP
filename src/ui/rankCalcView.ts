// 評価値ちぇっくモード：スコア＆パラメータを入力するだけで評価値・ランク・
// 各ランクに必要な最終試験スコアを表示する。編成予測より軽量。
// 主用途：最終試験前に「目標ランクに届くには何点必要か」を逆算する。

import { type RankCalcInput, calcRank } from "../logic/rankCalc";
import { DIFFICULTY_LABEL, type Difficulty, PARAM_CAP } from "../types";
import { h, segmented } from "./dom";
import { field, numberField, sectionTitle } from "./inputView";

const fmt = (n: number) => n.toLocaleString("ja-JP");

export function buildRankCalcView(): HTMLElement {
  const state: RankCalcInput = {
    vo: 1500,
    da: 1500,
    vi: 1500,
    exam: { midScore: 0, midRank: 1, finalScore: 0, finalRank: 1 },
    difficulty: "hajimeLegend",
  };

  const resultPane = h("div", { class: "pane" });
  const formPane = h("div", { class: "pane input-pane" });

  function render() {
    formPane.replaceChildren(buildForm());
    resultPane.replaceChildren(buildRankCalcResult());
  }

  function buildForm(): HTMLElement {
    const legend = state.difficulty === "hajimeLegend";
    const cap = PARAM_CAP[state.difficulty];
    const finalCap = legend ? 2_000_000 : 999_999;

    const rankOpts = [
      { value: 1, label: "1位" },
      { value: 2, label: "2位" },
      { value: 3, label: "3位" },
      { value: 4, label: "4位以下" },
    ];

    const form = h("form", { class: "form", onsubmit: (e: Event) => e.preventDefault() });

    form.append(sectionTitle("難易度"));
    form.append(
      segmented(
        (Object.keys(DIFFICULTY_LABEL) as Difficulty[]).map((d) => ({
          value: d,
          label: DIFFICULTY_LABEL[d],
        })),
        state.difficulty,
        (v) => {
          state.difficulty = v;
          // 上限を超えていたらクランプ。
          const c = PARAM_CAP[v];
          state.vo = Math.min(state.vo, c);
          state.da = Math.min(state.da, c);
          state.vi = Math.min(state.vi, c);
          render();
        },
      ),
    );

    form.append(sectionTitle(`パラメータ（各上限 ${fmt(cap)}）`));
    form.append(
      h(
        "div",
        { class: "sched-grid" },
        numberField("Vo", state.vo, (v) => ((state.vo = Math.min(v, cap)), render()), { min: 0, max: cap, step: 10 }),
        numberField("Da", state.da, (v) => ((state.da = Math.min(v, cap)), render()), { min: 0, max: cap, step: 10 }),
        numberField("Vi", state.vi, (v) => ((state.vi = Math.min(v, cap)), render()), { min: 0, max: cap, step: 10 }),
      ),
    );

    form.append(sectionTitle("試験"));
    const examGrid = h("div", { class: "sched-grid" });
    if (legend) {
      examGrid.append(
        numberField("中間 スコア(上限20万)", state.exam.midScore, (v) => ((state.exam.midScore = v), render()), {
          min: 0,
          max: 200000,
          step: 1000,
        }),
      );
    }
    examGrid.append(
      numberField(
        `最終 スコア(上限${legend ? "200万" : fmt(finalCap)})`,
        state.exam.finalScore,
        (v) => ((state.exam.finalScore = v), render()),
        { min: 0, max: finalCap, step: 1000 },
      ),
    );
    form.append(examGrid);
    form.append(field("最終試験の順位", segmented(rankOpts, state.exam.finalRank, (v) => ((state.exam.finalRank = v), render()))));

    form.append(
      h(
        "p",
        { class: "muted small", style: "margin-top:12px" },
        "最終スコアを空欄(0)にすると、下の表で各ランクに必要な最終スコアだけ確認できます。",
      ),
    );
    return form;
  }

  function buildRankCalcResult(): HTMLElement {
    const r = calcRank(state);

    const rows = r.rows.map((row) => {
      let detail: string;
      let cls = "rc-row";
      if (row.reached) {
        detail = "達成済み";
        cls += " is-reached";
      } else if (!row.reachable) {
        detail = "上限でも届かない";
        cls += " is-unreachable";
      } else {
        detail = `最終試験 ${fmt(row.requiredFinalScore)}点`;
      }
      return h(
        "div",
        { class: cls },
        h("span", { class: "rc-rank" }, row.rankName),
        h("span", { class: "rc-req" }, `評価値 ${fmt(row.requiredValue)}`),
        h("span", { class: "rc-detail" }, detail),
      );
    });

    return h(
      "div",
      { class: "result" },
      h(
        "div",
        { class: "rank-hero" },
        h("span", { class: "rank-hero-label" }, "現在の評価値 / ランク"),
        h("span", { class: "rank-hero-value" }, r.reachedRankName),
        h("span", { class: "rank-hero-eval" }, `評価値 ${fmt(r.evaluationValue)}`),
      ),
      h(
        "div",
        { class: "bd-block" },
        bd("パラメータ評価", r.paramEval),
        bd("試験スコア評価（中間＋最終）", r.examEval),
        bd("順位評価", r.rankEval),
      ),
      h("h3", { class: "section-title", style: "margin-top:16px" }, "各ランクに必要な最終試験スコア"),
      h(
        "p",
        { class: "muted small", style: "margin:-4px 0 8px" },
        "現在のパラメータ・順位・中間スコアを固定して逆算。",
      ),
      h("div", { class: "rc-table" }, ...rows),
      h(
        "p",
        { class: "muted small", style: "margin-top:12px" },
        "評価値 = パラメータ評価 + 試験スコア評価 + 順位評価（実データ式）。",
      ),
    );
  }

  function bd(label: string, value: number): HTMLElement {
    return h("div", { class: "bd-row" }, h("span", {}, label), h("span", { class: "bd-value" }, fmt(value)));
  }

  const wrap = h("div", { class: "layout" }, formPane, resultPane);
  render();
  return wrap;
}
