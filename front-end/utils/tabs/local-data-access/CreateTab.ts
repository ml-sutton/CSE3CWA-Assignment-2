import { Tab } from "../../../domain/models/tab"

export default function CreateNewTab(currentTabs: Tab[], tabCount: number): Promise<Tab[]> {
  return new Promise((resolve, reject) => {
    try {

      console.log(currentTabs)
      const usedTabIDs: number[] = [];
      currentTabs.forEach(tabItem => {
        if (usedTabIDs.filter(idItem => idItem != tabItem.tabId))
          usedTabIDs.push(tabItem.tabId)
      })
      const tabId = generateTabId(usedTabIDs);
      if (tabCount + 1 == 16) {
        alert("YOU HAVE REACHED THE MAXIUM AMOUNT OF TABS")
        return;
      }
      const newTab: Tab = {
        tabId: tabId,
        tabName: `new tab #${tabId}`,
        tabBody: "# Edit me!",
        isSelected: false
      }
      const allTabs = currentTabs ?? [];
      return resolve([...allTabs, newTab]);
    } catch (error) {
      return reject(error);
    }
  })
}
const generateTabId = (usedID: number[]): number => {
  if (usedID.length == 0) {
    return 1;
  } else {
    console.log(usedID)
    const max = Math.max(...usedID);
    const tabId = max + 1;
    return tabId;
  }
}
