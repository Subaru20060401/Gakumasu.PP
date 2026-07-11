// Vo/Da/Vi のステータスアイコン（ゲーム風・SVGで再現）。
// 色: Vo=ピンク(マイク) / Da=ブルー(シューズ) / Vi=オレンジ(パレット)。
// 実ゲーム画像に差し替えたい場合はこの SVG を画像に置き換えればよい。

import type { ParamType } from "../types";

const MIC = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="2.5" width="6" height="11" rx="3" fill="#fff"/>
<path d="M6 11a6 6 0 0 0 12 0" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
<line x1="12" y1="17" x2="12" y2="21" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
<line x1="8.5" y1="21" x2="15.5" y2="21" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`;

const SHOE = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16c0-1 .6-1.8 1.8-2l4.2-3.2 1.6 1.8 1.4-1 1.2 1.4c1 .1 2 .2 3.2.6 1.4.5 2.4 1.3 2.6 2.6l.2 1.3c.1.7-.4 1.2-1.1 1.2H4c-.6 0-1-.4-1-1v-1.7z" fill="#fff"/>
<path d="M9 10.8l1.6 1.8M12.6 13.4l1.4-1" stroke="#5b9bd5" stroke-width="1" stroke-linecap="round"/></svg>`;

const PALETTE = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.2c-5 0-8.8 3.6-8.8 8 0 4.2 3.4 6.8 6.4 6.8.9 0 1.4-.7 1.2-1.5-.2-.9.4-1.7 1.4-1.7h2.1c3 0 5.3-2.3 5.3-5.2 0-4-3.6-6.4-7.6-6.4z" fill="#fff"/>
<circle cx="8" cy="10.5" r="1.2" fill="#e0a83c"/>
<circle cx="12" cy="8" r="1.2" fill="#e0a83c"/>
<circle cx="16" cy="10.5" r="1.2" fill="#e0a83c"/></svg>`;

export const STAT_ICON_SVG: Record<ParamType, string> = {
  vo: MIC,
  da: SHOE,
  vi: PALETTE,
};

/** ステータスアイコン要素（色付き角丸背景 + SVG）。 */
export function statIconEl(stat: ParamType): HTMLElement {
  const span = document.createElement("span");
  span.className = `stat-icon stat-icon-${stat}`;
  span.innerHTML = STAT_ICON_SVG[stat];
  return span;
}
