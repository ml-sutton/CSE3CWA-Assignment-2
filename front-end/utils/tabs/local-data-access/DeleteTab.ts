import { Tab } from "../../../domain/models/tab"


export default function DeleteTabFromLocalStorage(tabs: Tab[], tabID: number): Promise<Tab[]> {
  return new Promise((resolve, reject) => {
    try {
      const newTabs = [...tabs].filter(item => item.tabId != tabID)
      return resolve(newTabs);
    } catch (error) {
      return reject(error)
    }


  })

}
