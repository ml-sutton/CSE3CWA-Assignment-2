import { RepoStatistics } from "../../domain/models/repoStatistics"
import { LoadingModal } from "../global/modals/loadingModal"
import { MainCard } from "./cards/mainCard"

interface AboutPagePropTypes {
  repoStats: RepoStatistics
}

export const AboutPage: React.FC<AboutPagePropTypes> = ({ repoStats }) => {
  return (
    <div className={`w-screen flex min-h-[85vh] overflow-x-clip justify-center px-4 py-8 bg-gradient-to-r from-slate-300 dark:from-slate-900 to-slate-500 dark:to-slate-700 text-[#111] dark:text-[#fefefe]`} >
      <MainCard repoStats={repoStats} />
    </div>
  )
}
