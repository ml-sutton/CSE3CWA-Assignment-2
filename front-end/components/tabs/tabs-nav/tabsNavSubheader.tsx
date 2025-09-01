import CreateNewTab from "../../../utils/tabs/local-data-access/CreateTab";
import DeleteTab from "../../../utils/tabs/local-data-access/DeleteTab";
import { Tab } from "../../../domain/models/tab";
import React from "react";
interface TabsNavSubHeaderPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
  tabCount: number
  setTabCount: React.Dispatch<React.SetStateAction<number>>
}
export const TabsNavSubHeader: React.FC<TabsNavSubHeaderPropTypes> = ({ tabs, setTabs, selectedTab, setSelectedTab, tabCount, setTabCount }) => {
  const createTab = () => {
    console.log(tabCount)
    CreateNewTab(tabs, tabCount).then(newTabs => {
      setTabs(newTabs);
      setTabCount(old => old += 1);
    }).catch(error => {
      console.warn(error);
      setTabs(tabs);
    })

  }
  const deleteTab = () => {
    const tabToDelete: number = selectedTab;
    const didDelete = DeleteTab(tabs, tabToDelete);
    didDelete.then(tabsValue => {
      setTabs(tabsValue);
      setSelectedTab(tabToDelete + 1);
      setTabCount(old => old -= 1);
    }).catch(error => {
      console.warn(error)
      if (tabs.length == 0) {
        setSelectedTab(0);
        console.log(tabCount)
      }
    })
  }
  return (

    <div className="flex w-full justify-end pl-4 border-t-2 border-b-2">
      <div className="flex justify-center items-center mr-auto">
        <p className="">{tabCount}/15</p>
      </div>
      <div className="">
        <button className="p-2 px-4 text-xl border-l-2 cursor-pointer hover:bg-emerald-400" onClick={() => createTab()}>+</button>
        <button className="p-2 px-4 text-xl border-l-2 cursor-pointer hover:bg-red-400" onClick={() => deleteTab()}>-</button>
      </div>
    </div>
  )
}
