// 軽量 DOM ヘルパー。フレームワーク無しで要素を組み立てる。

type Child = Node | string | null | undefined | false;

export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: Partial<Record<string, unknown>> = {},
  ...children: Child[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (value == null || value === false) continue;
    if (key === "class") el.className = String(value);
    else if (key === "dataset") Object.assign(el.dataset, value);
    else if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
    } else if (key in el) {
      // value, textContent, htmlFor など
      (el as Record<string, unknown>)[key] = value;
    } else {
      el.setAttribute(key, String(value));
    }
  }
  for (const child of children) {
    if (child == null || child === false) continue;
    el.append(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return el;
}

/** option 要素を持つ select を作る汎用ヘルパー。 */
export function select(
  options: { value: string; label: string; disabled?: boolean }[],
  current: string | null,
  onChange: (value: string) => void,
): HTMLSelectElement {
  const el = h(
    "select",
    {
      class: "field-select",
      onchange: (e: Event) => onChange((e.target as HTMLSelectElement).value),
    },
    ...options.map((o) =>
      h("option", { value: o.value, disabled: o.disabled, selected: o.value === current }, o.label),
    ),
  );
  return el;
}

/** 0〜5 などのトグルボタン群（凸数・難易度・方針）。 */
export function segmented<T extends string | number>(
  values: { value: T; label: string }[],
  current: T,
  onSelect: (value: T) => void,
): HTMLElement {
  const wrap = h("div", { class: "segmented" });
  const buttons = values.map((v) => {
    const btn = h(
      "button",
      {
        type: "button",
        class: v.value === current ? "seg active" : "seg",
        onclick: () => {
          onSelect(v.value);
          wrap.querySelectorAll(".seg").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        },
      },
      v.label,
    );
    return btn;
  });
  wrap.append(...buttons);
  return wrap;
}
