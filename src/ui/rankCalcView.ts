// 評価値ちぇっくモード：最終試験前のパラメータ等を入力するだけで
// 評価値・ランク・各ランクに必要な最終試験スコアを表示する。
// 参考: haru計算機（初レジェ）。主用途：最終試験でどれだけ取れば目標ランクに届くか。

import { type RankCalcInput, calcRank } from "../logic/rankCalc";
import { DIFFICULTY_LABEL, type Difficulty, PARAM_CAP } from "../types";
import { h, segmented } from "./dom";
import { field, numberField, sectionTitle } from "./inputView";

const fmt = (n: number) => n.toLocaleString("ja-JP");

export function buildRankCalcView(): HTMLElement {
  const state: RankCalcInput = {
    preVo: 1500,
    preDa: 1500,
    preVi: 1500,
    abiVo: 0,
    abiDa: 0,
    abiVi: 0,
    midScore: 0,
    finalScore: 0,
    finalRank: 1,
    difficulty: "hajimeLegend",
  };

  const formPane = h("div", { class: "pane input-pane" });
  const resultPane = h("div", { class: "pane" });

  // 結果だけ再描画（入力欄は作り直さない＝連続入力できる）。
  function renderResult() {
    resultPane.replaceChildren(buildRankCalcResult());
  }
  // 難易度変更時のみフォームを作り直す（中間欄の有無・上限が変わるため）。
  function renderForm() {
    formPane.replaceChildren(buildForm());
    renderResult();
  }

  function buildForm(): HTMLElement {
    const legend = state.difficulty === "hajimeLegend";
    const cap = PARAM_CAP[state.difficulty];
    const finalCap = legend ? 2_000_000 : 999_999;

    const form = h("form", { class: "form", onsubmit: (e: Event) => e.preventDefault() });

    form.append(sectionTitle("難易度"));
    form.append(
      segmented(
        (Object.keys(DIFFICULTY_LABEL) as Difficulty[]).map((d) => ({ value: d, label: DIFFICULTY_LABEL[d] })),
        state.difficulty,
        (v) => {
          state.difficulty = v;
          const c = PARAM_CAP[v];
          state.preVo = Math.min(state.preVo, c);
          state.preDa = Math.min(state.preDa, c);
          state.preVi = Math.min(state.preVi, c);
          renderForm();
        },
      ),
    );

    form.append(sectionTitle(`試験前パラメータ（各上限 ${fmt(cap)}）`));
    form.append(
      h(
        "p",
        { class: "muted small", style: "margin:-4px 0 8px" },
        "最終試験に入る前の Vo/Da/Vi。",
      ),
    );
    form.append(
      h(
        "div",
        { class: "sched-grid" },
        numberField("Vo", state.preVo, (v) => ((state.preVo = Math.min(v, cap)), renderResult()), { min: 0, max: cap, step: 10 }),
        numberField("Da", state.preDa, (v) => ((state.preDa = Math.min(v, cap)), renderResult()), { min: 0, max: cap, step: 10 }),
        numberField("Vi", state.preVi, (v) => ((state.preVi = Math.min(v, cap)), renderResult()), { min: 0, max: cap, step: 10 }),
      ),
    );

    form.append(sectionTitle("試験終了時アビ点数（任意）"));
    form.append(
      h(
        "p",
        { class: "muted small", style: "margin:-4px 0 8px" },
        "最終試験終了時に加算されるアビ点数（例: ふわもこ完凸編成で Da+17）。無ければ0。",
      ),
    );
    form.append(
      h(
        "div",
        { class: "sched-grid" },
        numberField("Vo", state.abiVo, (v) => ((state.abiVo = v), renderResult()), { min: 0, step: 1 }),
        numberField("Da", state.abiDa, (v) => ((state.abiDa = v), renderResult()), { min: 0, step: 1 }),
        numberField("Vi", state.abiVi, (v) => ((state.abiVi = v), renderResult()), { min: 0, step: 1 }),
      ),
    );

    form.append(sectionTitle("試験スコア・順位"));
    const examGrid = h("div", { class: "sched-grid" });
    if (legend) {
      examGrid.append(
        numberField("中間 スコア(上限20万)", state.midScore, (v) => ((state.midScore = v), renderResult()), {
          min: 0,
          max: 200000,
          step: 1000,
        }),
      );
    }
    examGrid.append(
      numberField(
        `最終 スコア(上限${legend ? "200万" : fmt(finalCap)})`,
        state.finalScore,
        (v) => ((state.finalScore = v), renderResult()),
        { min: 0, max: finalCap, step: 1000 },
      ),
    );
    form.append(examGrid);
    form.append(
      field(
        "最終試験の順位（パラメータ+160/80/40）",
        segmented(
          [
            { value: 1, label: "1位" },
            { value: 2, label: "2位" },
            { value: 3, label: "3位" },
            { value: 4, label: "不合格" },
          ],
          state.finalRank,
          (v) => ((state.finalRank = v), renderResult()),
        ),
      ),
    );

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
        bd(`最終パラメータ合計（${fmt(r.finalVo)}/${fmt(r.finalDa)}/${fmt(r.finalVi)}）`, r.finalStatTotal),
        bd("パラメータ評価", r.paramEval),
        bd("中間スコア評価", r.midEval),
        bd("最終スコア評価", r.finalEval),
        bd("順位評価", r.rankEval),
      ),
      h("h3", { class: "section-title", style: "margin-top:16px" }, "目標ランク別 必要最終試験スコア"),
      h(
        "p",
        { class: "muted small", style: "margin:-4px 0 8px" },
        "試験前パラメータ・アビ点数・順位・中間スコアを固定して逆算。",
      ),
      h("div", { class: "rc-table" }, ...rows),
      h(
        "p",
        { class: "muted small", style: "margin-top:12px" },
        "評価値 = パラメータ評価(2.1×合計) + 中間 + 最終 + 順位評価（haru計算機の実測式準拠）。",
      ),
    );
  }

  function bd(label: string, value: number): HTMLElement {
    return h("div", { class: "bd-row" }, h("span", {}, label), h("span", { class: "bd-value" }, fmt(value)));
  }

  const wrap = h("div", { class: "layout" }, formPane, resultPane);
  renderForm();
  return wrap;
}
