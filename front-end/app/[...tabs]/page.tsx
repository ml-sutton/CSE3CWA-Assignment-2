import { Suspense } from "react";
import { TabsPage } from "../../components/tabs/tabsPage";

export default async function Home({ params }: { params: { tabs: string } }) {
  return (
    <Suspense fallback={<></>}>
      <TabsPage tabs={[]} selectedTab={params.tabs} />
    </Suspense>
  );
}
