import { StylizedHeader } from "../headers/stylisedHeader"
import { StylizedSubheader } from "../headers/stylisedSubheader"
import { RepoStats } from "./repoStats"
import { VideoPlayer } from "./video/videoPlayer"

export const MainCard: React.FC = () => {
  return (<div className=" h-fit border-2 border-[#111111] rounded-4xl">
    <div className="border-2 rounded-4xl border-slate-200">
      <div className="min-w-full lg:p-4 bg-gradient-to-r from-violet-200 to-pink-200 h-fit border-2 border-[#111111] rounded-4xl lg:py-8">
        <StylizedHeader text="Madison Lilith Sutton" />
        <StylizedSubheader text="21985164" />
        <VideoPlayer />
        <RepoStats />
      </div>
    </div>
  </div>)
}
