
import { Tab } from "../../domain/models/tab"
import { TabsNav } from "./tabs-nav/tabsNav";
import { TabsForm } from "./tabs-form/tabsForm";
import { TabsOutput } from "./tabs-output/tabsOutput";
interface TabsPageProps {
  tabs: Tab[]
  selectedTab: string
}


export const TabsPage: React.FC<TabsPageProps> = async ({ tabs, selectedTab }) => {
  const selectedTabAsNum = isNaN(Number(selectedTab)) ? -1 : Number(selectedTab);

  return (
    <section>
      <div className={`flex flex-col lg:flex-row px-8 py-8 min-h-[85vh] overflow-x-clip max-h-[90vh] bg-gradient-to-r from-slate-300 dark:from-slate-900 to-slate-500 dark:to-slate-700 text-[#111] dark:text-[#fefefe]`}>
        <TabsNav tabs={tabs} selectedTab={selectedTabAsNum} />
        <TabsForm tab={tabs[selectedTabAsNum]} selectedTab={selectedTabAsNum} />
        <TabsOutput tabs={tabs} />
      </div>
    </section>
  )
}
