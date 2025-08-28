"use client"

import { useEffect, useState } from "react";
import { Tab } from "../../../domain/models/tab"
import { TabsNav } from "../tabs-nav/tabsNav";
import { TabsForm } from "../tabs-form/tabsForm";
import { TabsOutput } from "../tabs-output/tabsOutput";



export const TabsLayout: React.FC = () => {
  const themed1 = ""

  const [tabs, setTabs] = useState<Tab[]>([])
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [tabCount, setTabCount] = useState(0);
  const [loadedData, setLoadedData] = useState<boolean>(false);



  return (
    <section>
      <div className={`flex flex-col lg:flex-row px-8 py-8 min-h-[85vh] overflow-x-clip max-h-[90vh] bg-gradient-to-r from-slate-300 dark:from-slate-900 to-slate-500 dark:to-slate-700 text-[#111] dark:text-[#fefefe]`}>
        <TabsNav tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabCount={tabCount} />
        <TabsForm tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} tabCount={tabCount} loadedData={loadedData} />
        <TabsOutput tabs={tabs} />
      </div>
    </section>
  )
}
