"use client";

import { SetStateAction, useContext, useEffect, useState } from "react";
import { TabsNavTitleBar } from "./tabsNavTitleBar";
import { ThemeContext } from "../../../utils/theme/context/themeContext";
import { TabsNavSubHeader } from "./tabsNavSubheader";
import { TabNavLink } from "./tabNavLinks";
import { Tab } from "../../../utils/tabs/models/tab";
import GetTabByID from "../../../utils/tabs/data-access/GetTabByID";
import { TabsHamburgerMenu } from "./mobile-exclusives/tabs-hamburger/tabsHamburgerMenu";
interface TabsNavPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
  tabCount: number
}
export const TabsNav: React.FC<TabsNavPropTypes> = ({ tabs, setTabs, selectedTab, setSelectedTab, tabCount }) => {
  const [selectedTabName, setSelectedTabName] = useState<string>("No Tab Selected");
  const themeContext = useContext(ThemeContext);
  const themedStyles: string = themeContext?.theme === "light" ? "bg-slate-100 text-[#111]" : "bg-slate-800 text-[#fefefe]"
  useEffect(() => {
    GetTabByID(tabs, selectedTab).then(tabValue => {
      const newTabName = tabValue.tabName;
      setSelectedTabName(newTabName)
      console.log(selectedTab, newTabName)
    }).catch(error => {
      console.warn(error)
      setSelectedTabName("No Tab Selected");
    })
  }, [selectedTab, tabs])

  return (
    <div className={`min-w-1/4 ${themedStyles} border-2 lg: lg:rounded-4xl`}>
      <TabsNavTitleBar tabName={selectedTabName} />
      <div className="hidden lg:block">
        <TabsNavSubHeader tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} tabCount={tabCount} setSelectedTab={setSelectedTab} />
      </div>
      <nav className="hidden lg:block">
        {(!tabs || tabs.length == 0) ? (
          <div className="px-4 py-4 text-xl">
            You have not created any tabs yet! Please press the + button to create a tab and start exporting!
          </div>
        ) : <ul>
          {tabs.map((tab, key) => {
            return <li key={key}><TabNavLink tabID={tab.tabId} tabName={tab.tabName ?? "untitled tab"} selectedTab={selectedTab} setSelectedTab={setSelectedTab} /></li>
          })}
        </ul>}
      </nav>
      <div className="block lg:hidden">
        <TabsHamburgerMenu tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  )
}
