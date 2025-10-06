
import { TabsNavTitleBar } from "./tabsNavTitleBar";
import { TabsNavSubHeader } from "./tabsNavSubheader";
import { TabNavLink } from "./tabNavLinks";
import { Tab } from "../../../domain/models/tab";
import GetTabByID from "../../../utils/tabs/local-data-access/GetTabByID";
interface TabsNavPropTypes {
  tabs: Tab[]
  selectedTab: number
}
export const TabsNav: React.FC<TabsNavPropTypes> = async ({ tabs, selectedTab }) => {

  return (
    <div className={`lg:min-w-1/4 lg:max-w-1/4 bg-slate-100 dark:bg-slate-800 text-[#111] dark:text-[#fefefe] border-2 lg: lg:rounded-xl`}>
      <TabsNavTitleBar tabName={!tabs[selectedTab] ? "no tab selected" : tabs[selectedTab].tabName} />
      <div className="block">
        <TabsNavSubHeader tabs={tabs} />
      </div>
      <nav className="block">
        {(!tabs || tabs.length == 0) ? (
          <div className="px-4 py-4 text-xl">
            You have not created any tabs yet! Please press the + button to create a tab and start exporting!
          </div>
        ) : <ul>
          {tabs.map((tab, key) => {
            return <li key={key}><TabNavLink tabID={tab.tabId} tabName={tab.tabName ?? "untitled tab"} selectedTab={selectedTab} /></li>
          })}
        </ul>}
      </nav>
    </div>
  )
}
