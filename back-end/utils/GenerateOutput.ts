import { Tab } from "../models/tab";
import SanitizeTabs from "./SanitizeTabs";

export const GenerateTabOutput = (tabs: Tab[]) => {
  const sanitizedTabs = SanitizeTabs(tabs)
  const tabDataString = JSON.stringify(sanitizedTabs, null, 2);
  // BEGIN
  // THIS CODE IS AI GENERATED
  return `<section class="tabs-section"
    style="font-family: monospace; width: 100%; border: 1px solid #ccc; border-radius: 6px; background: #fff;">
    <nav class="tabs-nav"
      style="display: flex; flex-wrap: wrap; gap: 2px; border-bottom: 1px solid #ccc; padding: 0 8px; background: #f8f8f8;">
    </nav>

    <section>
      <h3 class="tab-heading" style="margin: 12px 12px 8px; font-size: 18px;"></h3>

      <!-- code area container -->
      <div class="tab-body" style="padding: 12px; white-space: pre; font-size: 14px; display: block; overflow: auto;">
      </div>
    </section>
  </section>
  <script>
    const $ = (sel) => document.querySelector(sel);
    const tabs = ${tabDataString};
    const nav = $(".tabs-nav");
    const heading = $(".tab-heading");
    const body = $(".tab-body");
    const baseBtnStyle =
      "position: relative; padding: 8px 14px; cursor: pointer; border: 1px solid #ccc; border-bottom: none; background: #eee; margin: 0 2px 0 0; border-top-left-radius: 6px; border-top-right-radius: 6px; font-family: inherit; font-size: 14px;";
    const activeBtnExtra =
      "background: #fff; font-weight: bold; z-index: 1;";
    function decodeEntities(str) {
      const txt = document.createElement("textarea");
      txt.innerHTML = str;
      return txt.value;
    }
    function renderTabs() {
      nav.innerHTML = "";
      tabs.forEach(tab => {
        const btn = document.createElement("button");
        btn.textContent = tab.tabName;
        btn.className = "tab-button";
        btn.id = tab.tabId;
        btn.style.cssText = baseBtnStyle;
        btn.onmouseenter = () => { if (!btn.classList.contains("active")) btn.style.background = "#f2f2f2"; };
        btn.onmouseleave = () => { if (!btn.classList.contains("active")) btn.style.background = "#eee"; };
        btn.addEventListener("click", () => setActiveTab(tab.tabId));
        nav.appendChild(btn);
      });
    }
    function setActiveTab(tabId) {
      const prev = $(".tab-button.active");
      if (prev) {
        prev.classList.remove("active");
        prev.style.cssText = baseBtnStyle; // reset to base
      }
      const tab = tabs.find(t => t.tabId === tabId);
      const btn = document.getElementById(String(tabId));
      btn.classList.add("active");
      btn.style.cssText = baseBtnStyle + activeBtnExtra;
      heading.textContent = tab.tabName;
      body.innerHTML = "";
      const decoded = decodeEntities(tab.tabBody);
      const lines = decoded.split("\\n");
      const gutterCh = String(lines.length).length + 1; // +1 for a space
      lines.forEach((line, i) => {
        const row = document.createElement("div");
        row.style.cssText = "display: flex; align-items: flex-start;";
        const number = document.createElement("span");
        number.textContent = String(i + 1).padStart(gutterCh - 1, " ") + " ";
        number.style.cssText = "color: gray; text-align: right; margin-right: 12px; user-select: none;";
        number.style.minWidth = gutterCh + "ch";
        const code = document.createElement("span");
        // Use textContent so we don't parse HTML; white-space preserved by parent container
        code.textContent = line;
        row.appendChild(number);
        row.appendChild(code);
        body.appendChild(row);
      });
    }
    let activeTabId = tabs.length ? tabs[0].tabId : null;
    renderTabs();
    if (activeTabId) setActiveTab(activeTabId);</script>`;
  // END
};


