"use client"
import React, { useEffect, useState } from "react"
import { Tab } from "../../../domain/models/tab"
import { UpdateTabRequest } from "../../../domain/DTO/UpdateTabRequest"
import SaveTabToCloud from "@/utils/tabs/data-access/saveTabToCloud"

interface TabsFormPropTypes {
  tab: Tab
  selectedTab: number
}

export const TabsForm: React.FC<TabsFormPropTypes> = ({ tab }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [tabName, setTabName] = useState(typeof tab === "undefined" ? "NONE" : tab.tabName)
  const [tabData, setTabData] = useState(typeof tab === "undefined" ? "NONE" : tab.tabBody)
  useEffect(() => setHasMounted(true), []);
  useEffect(() => {
    if (!hasMounted) return;

    setTabName(tab.tabName)
    setTabData(tab.tabBody)
  }, [tab])
  const handleTabData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTabData(event.target.value)
  }
  const handleTabName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTabName(event.target.value)
  }
  const handleDataSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const tabToPush: UpdateTabRequest = {
      tabName: tabName,
      tabBody: tabData,
      isSelected: true
    }
    SaveTabToCloud(tab.tabId, tabToPush).then(_ => console.log("pushing"))
  }
  return tabName === "NONE" ? (
    <div className="min-w-1/2 h-full flex justify-center items-center px-4">
      <div className={` border-2 rounded-xl w-full px-8 py-4 flex justify-center items-center flex-col bg-slate-100 dark:bg-slate-800 text-[#111] dark:text-[#fefefe]`}>
        <h1 className="text-2xl">You don't have a tab open!</h1>
        <p className="text-xl">Please create a new tab or select one from the sidebar</p>
      </div>
    </div>
  ) : (<div className={`min-w-2/3 lg:min-w-1/2 h-full  py-4 lg:p-4`}>
    <form >
      <div className={`border-2 rounded-t-xl lg:border-0 lg:py-4 flex justify-between py-2 lg:justify-start lg:px-6 bg-slate-100 dark:bg-slate-800 text-[#111] dark:text-[#fefefe]`}>
        <label htmlFor="tab-name-input" className={`lg:text-xl lg:border-2 border-r-0 px-4 lg:px-8 lg:py-[11px] rounded-l-lg `}>Tab Name : </label>
        <input className={`lg:text-xl lg:border-2 lg:border-l-0 lg:px-8 lg:py-2 rounded-tr-xl lg:rounded-r-lg active:border-blue-800 hover:border-blue-500 `} type="text" id="tab-name-input" value={tabName} onChange={handleTabName} />
        <div className="flex justify-center items-center ml-auto">
          <button className="lg:text-xl lg:border-2 lg:px-8 lg:py-2 rounded-lg cursor-pointer hover:bg-blue-400 active:border-blue-500 disabled:hover:bg-red-500 disabled:hover:text-red-950 disabled:active:border-red-500 bg-zinc-300 dark:bg-gray-700 text-[#111] dark:text-[#fefefe] text-shadow-md text-shadow-zinc-50 dark:text-shadow-grey-900 border-slate-50 dark:border-zinc-800" onClick={handleDataSave}  >Save Data To Cloud</button>
        </div>
      </div>
      <div className="lg:border-t-2 lg:pt-4">
        <textarea rows={25} name="tab-data-input" className={`text-shadow-md py-4 text-lg lg:text-xl lg:rounded-t-xl rounded-b-xl border-2 border-t-0 lg:border-t-2  hover:border-blue-500 active:border-blue-800 border-gray-300 px-4 min-w-full h-full lg:resize-none bg-slate-100 dark:bg-slate-800 text-[#111] dark:text-[#fefefe]`} value={tabData} onChange={handleTabData}></textarea>
      </div>
    </form>
  </div>)

}
