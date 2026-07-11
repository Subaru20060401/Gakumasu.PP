// 検索・絞り込みできるカスタム選択ピッカー。
// 標準の<select>だと画像やバッジを出せず、長いリストも探しにくいので、
// モーダルで検索＋一覧から選ぶUIを提供する。将来 imageUrl でサムネ表示可。

import { h } from "./dom";

export interface PickerBadge {
  text: string;
  kind?: string; // css修飾用（rarity/type/plan など）
}

export interface PickerItem {
  value: string;
  title: string;
  subtitle?: string;
  badges?: PickerBadge[];
  keywords: string; // 検索対象（小文字化して部分一致）
  imageUrl?: string;
}

interface PickerOptions {
  items: PickerItem[];
  value: string | null;
  placeholder: string;
  noneLabel?: string; // 「（なし）」を選べる場合のラベル
  onSelect: (value: string | null) => void;
}

function badgeEls(item: PickerItem): (HTMLElement | null)[] {
  return (item.badges ?? []).map((b) =>
    h("span", { class: `pk-badge${b.kind ? ` pk-${b.kind}` : ""}` }, b.text),
  );
}

function thumb(item: PickerItem): HTMLElement {
  if (item.imageUrl) {
    return h("img", { class: "pk-thumb", src: item.imageUrl, alt: "", loading: "lazy" });
  }
  // 画像が無ければ頭文字プレースホルダ。
  return h("span", { class: "pk-thumb pk-thumb-ph" }, item.title.slice(0, 1));
}

export function picker(opts: PickerOptions): HTMLElement {
  let current = opts.value;

  const trigger = h("button", { type: "button", class: "picker-trigger" });

  const renderTrigger = () => {
    const cur = opts.items.find((i) => i.value === current);
    if (!cur) {
      trigger.replaceChildren(h("span", { class: "picker-placeholder" }, opts.placeholder));
      return;
    }
    trigger.replaceChildren(
      thumb(cur),
      h(
        "span",
        { class: "picker-trigger-text" },
        h("span", { class: "pk-title" }, cur.title),
        ...badgeEls(cur),
      ),
      h("span", { class: "picker-caret" }, "▾"),
    );
  };

  const pick = (v: string | null) => {
    current = v;
    opts.onSelect(v);
    renderTrigger();
  };

  trigger.addEventListener("click", () => openModal(opts, current, pick));
  renderTrigger();
  return trigger;
}

function openModal(
  opts: PickerOptions,
  current: string | null,
  onPick: (v: string | null) => void,
) {
  const search = h("input", {
    class: "pk-search",
    type: "search",
    placeholder: "名前・キャラ・タイプで検索…",
    autofocus: true,
  }) as HTMLInputElement;

  const list = h("div", { class: "pk-list" });

  const rowFor = (item: PickerItem) =>
    h(
      "button",
      {
        type: "button",
        class: `pk-row${item.value === current ? " selected" : ""}`,
        onclick: () => close(item.value),
      },
      thumb(item),
      h(
        "span",
        { class: "pk-row-main" },
        h("span", { class: "pk-title" }, item.title),
        item.subtitle && h("span", { class: "pk-sub" }, item.subtitle),
      ),
      h("span", { class: "pk-row-badges" }, ...badgeEls(item)),
    );

  const renderList = () => {
    const q = search.value.trim().toLowerCase();
    const rows: (HTMLElement | null)[] = [];
    if (opts.noneLabel) {
      rows.push(
        h(
          "button",
          { type: "button", class: "pk-row pk-none", onclick: () => close(null) },
          h("span", { class: "pk-thumb pk-thumb-ph" }, "—"),
          h("span", { class: "pk-row-main" }, h("span", { class: "pk-title" }, opts.noneLabel)),
        ),
      );
    }
    const matched = q
      ? opts.items.filter((i) => i.keywords.includes(q))
      : opts.items;
    for (const item of matched.slice(0, 200)) rows.push(rowFor(item));
    list.replaceChildren(...(rows.filter(Boolean) as HTMLElement[]));
    if (matched.length === 0) {
      list.append(h("p", { class: "pk-empty" }, "該当なし"));
    }
  };

  const backdrop = h(
    "div",
    { class: "pk-backdrop", onclick: (e: Event) => e.target === backdrop && close(current) },
    h(
      "div",
      { class: "pk-modal" },
      h(
        "div",
        { class: "pk-modal-head" },
        search,
        h("button", { type: "button", class: "pk-close", onclick: () => close(current) }, "×"),
      ),
      list,
    ),
  );

  function close(v: string | null) {
    document.removeEventListener("keydown", onKey);
    backdrop.remove();
    if (v !== current) onPick(v);
  }
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") close(current);
  };

  search.addEventListener("input", renderList);
  document.addEventListener("keydown", onKey);
  document.body.append(backdrop);
  renderList();
  search.focus();
}
