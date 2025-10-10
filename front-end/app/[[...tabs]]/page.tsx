import { Suspense } from "react";
import { TabsPage } from "../../components/tabs/tabsPage";
import PullAllTabs from "@/utils/tabs/data-access/pullAll";
import { Tab } from "@/domain/models/tab";
import UpdateSelected from "@/utils/tabs/data-access/updateSelected";

export default async function Home({ params }: { params: { tabs: string } }) {
  const awaitedParam = await params;
  const selectedTab = awaitedParam.tabs;

  const allTabs: Tab[] = await PullAllTabs();
  await UpdateSelected(isNaN(Number(selectedTab)) ? -1 : Number(selectedTab));
  return (
    <Suspense fallback={<></>}>
      <TabsPage tabs={allTabs} selectedTab={selectedTab} />
    </Suspense>
  );
}
