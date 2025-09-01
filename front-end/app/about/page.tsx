import { Suspense } from "react";
import { AboutPage } from "../../components/about/AboutPage";
import { GetRepoStats } from "../../utils/about/GetRepoStats";
import { LoadingModal } from "../../components/global/modals/loadingModal";


export default async function About() {
  const data = await GetRepoStats();

  return (
    <Suspense fallback={<LoadingModal />}>
      <AboutPage repoStats={data} />

      {/* <LoadingModal /> */}
    </Suspense>
  )
}

