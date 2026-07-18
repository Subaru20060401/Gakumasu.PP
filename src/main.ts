import "./style.css";
import { inject } from "@vercel/analytics";
import { scenarioById } from "./data/sampleData";
import { defaultMemories } from "./logic/memory";
import { predict } from "./logic/predict";
import type { ProduceInput } from "./types";
import { h } from "./ui/dom";
import { buildHifCalcView } from "./ui/hifCalcView";
import { buildInputForm } from "./ui/inputView";
import { buildRankCalcView } from "./ui/rankCalcView";
import { buildResult, buildResultPlaceholder } from "./ui/resultView";

// 現状は Version1（初・初レジェンド）固定。
const input: ProduceInput = {
  scenarioId: "hajime_legend",
  idolId: null,
  idolBonus: null,
  idolLimitBreak: 4,
  supports: Array.from({ length: 6 }, () => ({ cardId: null, limitBreak: 4 })),
  memories: defaultMemories(),
  challenge: { slot1: null, slot2: null, slot3: null },
  lessons: Array.from({ length: 5 }, () => ({ stat: "vo" as const, sp: true })),
  classes: ["vo", "vo", "vo", "vo"],
  schedule: { odekake: 0, shikyu: 4, sodan: 2, shido: 0, jugyo: 0, rest: 0 },
  exam: { midScore: 6000, midRank: 1, finalScore: 12000, finalRank: 1 },
  difficulty: "hajimeLegend",
};

const scenario = scenarioById(input.scenarioId);

const resultPane = h("div", { class: "result-pane" }, buildResultPlaceholder());

function runPrediction() {
  try {
    const result = predict(input);
    resultPane.replaceChildren(buildResult(result));
  } catch (e) {
    resultPane.replaceChildren(
      h("div", { class: "result error" }, h("p", {}, (e as Error).message)),
    );
  }
  resultPane.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ---- モード切替（編成予測 / 評価値ちぇっく） ----
type Mode = "predict" | "calc" | "hif";
let mode: Mode = "predict";

const headerSub = h("p", { class: "muted" });
const modeBody = h("div", {});

// 編成予測モードのDOM。自動編成後はフォーム全体を作り直して結果を反映する。
const formPane = h("section", { class: "pane input-pane" });
function renderForm() {
  formPane.replaceChildren(buildInputForm(input, runPrediction, { onRebuild: renderForm }));
}
renderForm();
const predictLayout = h(
  "main",
  { class: "layout" },
  formPane,
  h("section", { class: "pane" }, resultPane),
);

function renderMode() {
  if (mode === "predict") {
    headerSub.textContent = `編成から最終ステータスと評価値を予測　·　シナリオ: ${scenario.name}`;
    modeBody.replaceChildren(predictLayout);
  } else if (mode === "calc") {
    headerSub.textContent = "スコアとパラメータを入力して評価値・必要最終スコアを計算（初レジェンド）";
    modeBody.replaceChildren(buildRankCalcView());
  } else {
    headerSub.textContent = "H.I.F 本戦のパラメータ・スコア・スター性から評価値を計算";
    modeBody.replaceChildren(buildHifCalcView());
  }
  tabPredict.className = mode === "predict" ? "mode-tab active" : "mode-tab";
  tabCalc.className = mode === "calc" ? "mode-tab active" : "mode-tab";
  tabHif.className = mode === "hif" ? "mode-tab active" : "mode-tab";
}

const tabPredict = h(
  "button",
  { type: "button", onclick: () => ((mode = "predict"), renderMode()) },
  "🎯 編成から予測",
);
const tabCalc = h(
  "button",
  { type: "button", onclick: () => ((mode = "calc"), renderMode()) },
  "🧮 評価値ちぇっく",
);
const tabHif = h(
  "button",
  { type: "button", onclick: () => ((mode = "hif"), renderMode()) },
  "⭐ HIF評価値",
);
const modeTabs = h("div", { class: "mode-tabs" }, tabPredict, tabCalc, tabHif);

const app = h(
  "div",
  { class: "app" },
  h(
    "header",
    { class: "app-header" },
    h("h1", {}, "学マス プロデュース評価予測ツール"),
    headerSub,
  ),
  modeTabs,
  modeBody,
  h(
    "footer",
    { class: "app-footer" },
    h("span", { class: "muted small" }, "ベース版 · 予測ロジックは暫定（仮）"),
    h(
      "span",
      { class: "muted small" },
      "非公式のファンツールです。『学園アイドルマスター』および関連する権利は各権利者に帰属します（本サイトは公式とは一切関係ありません）。",
    ),
  ),
);

document.querySelector<HTMLDivElement>("#app")!.replaceChildren(app);

// Vercel Web Analytics（アクセス数計測）。Vercelダッシュボードの Analytics 有効化が必要。
inject();
renderMode();
