// H.I.F 評価値ちぇっく画面。
// パラメータ＋本戦R1/R2スコア＋スター性を入力し、HIF総合評価・ランク・
// 各ランクに必要な本戦R2スコアを表示する。

import {
  HIF_PARAM_CAP,
  HIF_R2_SCORE_CAP,
  HIF_STAR_MAX,
  type HifCalcInput,
  calcHif,
} from "../logic/hifCalc";
import { h } from "./dom";
import { numberField, scoreField, sectionTitle } from "./inputView";

const fmt = (n: number) => n.toLocaleString("ja-JP");

export function buildHifCalcView(): HTMLElement {
  const state: HifCalcInput = {
    vo: 1500,
    da: 1500,
    vi: 1500,
    round1Score: 0,
    round2Score: 0,
    star: 0,
  };

  const formPane = h("div", { class: "pane input-pane" });
  const resultPane = h("div", { class: "pane" });

  function renderResult() {
    resultPane.replaceChildren(buildResult());
  }

  function buildForm(): HTMLElement {
    const form = h("form", { class: "form", onsubmit: (e: Event) => e.preventDefault() });

    form.append(sectionTitle("シナリオ"));
    form.append(h("div", { class: "locked-field" }, "H.I.F（本戦）"));

    form.append(sectionTitle(`最終パラメータ（各上限 ${fmt(HIF_PARAM_CAP)}）`));
    form.append(
      h("p", { class: "muted small", style: "margin:-4px 0 8px" }, "本戦終了時の Vo/Da/Vi。"),
    );
    form.append(
      h(
        "div",
        { class: "sched-grid" },
        numberField("Vo", state.vo, (v) => ((state.vo = Math.min(v, HIF_PARAM_CAP)), renderResult()), { min: 0, max: HIF_PARAM_CAP, step: 10 }),
        numberField("Da", state.da, (v) => ((state.da = Math.min(v, HIF_PARAM_CAP)), renderResult()), { min: 0, max: HIF_PARAM_CAP, step: 10 }),
        numberField("Vi", state.vi, (v) => ((state.vi = Math.min(v, HIF_PARAM_CAP)), renderResult()), { min: 0, max: HIF_PARAM_CAP, step: 10 }),
      ),
    );

    form.append(sectionTitle("本戦スコア"));
    form.append(
      h(
        "p",
        { class: "muted small", style: "margin:-4px 0 8px" },
        "R1は評価点がスコア×1.2になります。スター性は下の欄に別途入力。",
      ),
    );
    form.append(
      h(
        "div",
        { class: "sched-grid" },
        scoreField("本戦R1 スコア", state.round1Score, (v) => ((state.round1Score = v), renderResult()), 4_000_000),
        scoreField(`本戦R2 スコア(上限${fmt(HIF_R2_SCORE_CAP)})`, state.round2Score, (v) => ((state.round2Score = v), renderResult()), HIF_R2_SCORE_CAP),
      ),
    );

    form.append(sectionTitle(`スター性（上限 ${fmt(HIF_STAR_MAX)}）`));
    form.append(
      h(
        "p",
        { class: "muted small", style: "margin:-4px 0 8px" },
        "スター性は評価に直結（+9/点）。本戦終了時点の値を入力。参考の獲得量は結果に表示。",
      ),
    );
    form.append(
      h(
        "div",
        { class: "sched-grid" },
        scoreField("スター性", state.star, (v) => ((state.star = Math.min(v, HIF_STAR_MAX)), renderResult()), HIF_STAR_MAX),
      ),
    );

    form.append(
      h(
        "p",
        { class: "muted small", style: "margin-top:12px" },
        "R2スコアを空欄(0)にすると、下の表で各ランクに必要な本戦R2スコアだけ確認できます。",
      ),
    );
    return form;
  }

  function bd(label: string, value: number | string): HTMLElement {
    return h(
      "div",
      { class: "bd-row" },
      h("span", {}, label),
      h("span", { class: "bd-value" }, typeof value === "number" ? fmt(value) : value),
    );
  }

  function buildResult(): HTMLElement {
    const r = calcHif(state);
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
        detail = `R2 ${fmt(row.requiredR2Score)}点`;
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
        h("span", { class: "rank-hero-label" }, "H.I.F 評価値 / ランク"),
        h("span", { class: "rank-hero-value" }, r.reachedRankName),
        h("span", { class: "rank-hero-eval" }, `評価値 ${fmt(r.evaluationValue)}`),
      ),
      h(
        "div",
        { class: "bd-block" },
        bd("パラメータ評価（2.1×合計）", r.paramEval),
        bd("本戦R1評価（×1.2）", r.r1Eval),
        bd("本戦R2評価", r.r2Eval),
        bd("baseEval 小計", r.baseEval),
        bd("スター性ボーナス（(星+190)×9）", r.starBonus),
        bd("＝ floor(base×0.718 + 星ボーナス)", r.evaluationValue),
      ),
      h(
        "div",
        { class: "bd-block" },
        h("div", { class: "bd-row bd-head" }, h("span", {}, "参考: このスコアでの獲得スター性"), h("span", {}, "")),
        bd("R1から", r.starFromR1),
        bd("R2から", r.starFromR2),
      ),
      h("h3", { class: "section-title", style: "margin-top:16px" }, "目標ランク別 必要 本戦R2スコア"),
      h(
        "p",
        { class: "muted small", style: "margin:-4px 0 8px" },
        "パラメータ・R1スコア・スター性を固定して逆算。",
      ),
      h("div", { class: "rc-table" }, ...rows),
      h(
        "p",
        { class: "muted small", style: "margin-top:12px" },
        "評価値 = floor(baseEval×0.718 + (スター性+190)×9)（haru計算機のHIF実測式準拠）。順位評価は無し。",
      ),
    );
  }

  formPane.replaceChildren(buildForm());
  renderResult();
  return h("div", { class: "layout" }, formPane, resultPane);
}
