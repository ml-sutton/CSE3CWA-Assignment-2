import { Tab } from "../models/tab";
// BEGIN  
// THIS CODE IS AI generated
const escapeHTML = (str: string) => {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "`": "&#96;",
    "=": "&#61;",
    "/": "&#47;"
  };
  return str.replace(/[&<>"'`=\/]/g, (ch) => map[ch]);
}
// END
export default function SanitizeTabs(tabs: Tab[]): Tab[] {
  const escapedTabs: Tab[] = tabs.map((tab) => {
    const sanitizedTitle = escapeHTML(tab.tabName);
    const sanitizedData = escapeHTML(tab.tabBody);
    const newTab: Tab = {
      tabId: tab.tabId,
      tabName: sanitizedTitle,
      tabBody: sanitizedData,
      isSelected: tab.isSelected
    };
    return newTab
  })
  return escapedTabs
}
