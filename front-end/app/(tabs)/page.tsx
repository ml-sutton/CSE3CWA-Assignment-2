import { Suspense } from "react";
import { TabsPage } from "../../components/tabs/tabsPage";

export default function Home() {
  return (
    <Suspense fallback={<></>}>
      <TabsPage tabs={[]} />
    </Suspense>
  );
}
