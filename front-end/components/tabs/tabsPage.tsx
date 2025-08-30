"use client"

import { SetStateAction, useEffect, useState } from "react";
import { Tab } from "../../domain/models/tab"
import { TabsNav } from "./tabs-nav/tabsNav";
import { TabsForm } from "./tabs-form/tabsForm";
import { TabsOutput } from "./tabs-output/tabsOutput";
interface TabsPageProps {
  tabs: Tab[]
}


export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {

  const [localTabs, setLocalTabs] = useState<Tab[]>([])
  const [localSelectedTab, setLocalSelectedTab] = useState<number>(0);
  const [localTabCount, setLocalTabCount] = useState(0);

  useEffect(() => {
    setLocalTabs([...tabs]);
    setLocalSelectedTab(tabs.length === 0 ? 0 : tabs.filter(tab => tab.isSelected)[0].tabId);
    setLocalTabCount(tabs.length);
  }, [tabs])


  return (
    <section>
      <div className={`flex flex-col lg:flex-row px-8 py-8 min-h-[85vh] overflow-x-clip max-h-[90vh] bg-gradient-to-r from-slate-300 dark:from-slate-900 to-slate-500 dark:to-slate-700 text-[#111] dark:text-[#fefefe]`}>
        <TabsNav tabs={localTabs} setTabs={setLocalTabs} selectedTab={localSelectedTab} setSelectedTab={setLocalSelectedTab} tabCount={localTabCount} />
      </div>
    </section>
  )
}
