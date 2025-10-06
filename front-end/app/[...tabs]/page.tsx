import { Suspense } from "react";
import { TabsPage } from "../../components/tabs/tabsPage";
import PullAllTabs from "@/utils/tabs/data-access/pull-all";
import { Tab } from "@/domain/models/tab";

export default async function Home({ params }: { params: { tabs: string } }) {
  const awaitedParam = await params;
  const selectedTab = awaitedParam.tabs;
  const allTabs: Tab[] = await PullAllTabs();
  return (
    <Suspense fallback={<></>}>
      <TabsPage tabs={allTabs} selectedTab={selectedTab} />
    </Suspense>
  );
}
