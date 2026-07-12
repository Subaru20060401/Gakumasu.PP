import "./style.css";
import { scenarioById } from "./data/sampleData";
import { defaultMemories } from "./logic/memory";
import { predict } from "./logic/predict";
import type { ProduceInput } from "./types";
import { h } from "./ui/dom";
import { buildInputForm } from "./ui/inputView";
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

const app = h(
  "div",
  { class: "app" },
  h(
    "header",
    { class: "app-header" },
    h("h1", {}, "学マス プロデュース評価予測ツール"),
    h(
      "p",
      { class: "muted" },
      `編成から最終ステータスと評価値を予測　·　シナリオ: ${scenario.name}`,
    ),
  ),
  h(
    "main",
    { class: "layout" },
    h("section", { class: "pane input-pane" }, buildInputForm(input, runPrediction)),
    h("section", { class: "pane" }, resultPane),
  ),
  h(
    "footer",
    { class: "app-footer" },
    h("span", { class: "muted small" }, "ベース版 · 予測ロジックは暫定（仮）"),
  ),
);

document.querySelector<HTMLDivElement>("#app")!.replaceChildren(app);
