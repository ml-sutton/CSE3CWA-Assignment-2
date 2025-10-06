"use client"

import CreateNewTab from "../../../utils/tabs/local-data-access/CreateTab";
import DeleteTab from "../../../utils/tabs/local-data-access/DeleteTab";
import { Tab } from "../../../domain/models/tab";
import React from "react";
interface TabsNavSubHeaderPropTypes {
  tabs: Tab[]
}
export const TabsNavSubHeader: React.FC<TabsNavSubHeaderPropTypes> = ({ tabs }) => {
  const createTab = () => {


  }
  const deleteTab = () => {

  }
  return (

    <div className="flex w-full justify-end pl-4 border-t-2 border-b-2">
      <div className="flex justify-center items-center mr-auto">
        <p className="">{tabs.length}/15</p>
      </div>
      <div className="">
        <button className="p-2 px-4 text-xl border-l-2 cursor-pointer hover:bg-emerald-400" onClick={() => createTab()}>+</button>
        <button className="p-2 px-4 text-xl border-l-2 cursor-pointer hover:bg-red-400" onClick={() => deleteTab()}>-</button>
      </div>
    </div>
  )
}
