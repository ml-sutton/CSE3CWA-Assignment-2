import { Tab } from "../../../domain/models/tab";

export default function GetTabByID(tabs: Tab[], tabID: number): Promise<Tab> {
  return new Promise((resolve, reject) => {
    try {
      const tab = [...tabs].filter(tabItem => tabItem.tabId == tabID);
      if (tab.length < 1) {
        throw new Error("404 TAB NOT FOUND")
      }
      return resolve(tab[0]);
    } catch (error) {
      return reject(error);
    }

  })

}
