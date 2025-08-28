import { useEffect, useState } from "react";
import { GetRepoStats, RepoStatistics } from "../../../utils/about/GetRepoStats"
import { SVGLineup } from "./svgLineup";
import Link from "next/link";

export const RepoStats: React.FC = () => {
  const [hasRendered, setHasRendered] = useState<boolean>(false);
  const [repoStats, setRepoStats] = useState<RepoStatistics>({ commits: 0, branches: 0, pullRequests: 0 })
  useEffect(() => {
    if (hasRendered) return;
    const stats: Promise<RepoStatistics> = GetRepoStats();
    stats.then(statsValue => {
      setRepoStats(statsValue)
      setHasRendered(true)
    }).catch(error => {
      console.warn(error);
      setHasRendered(true);
    });

  }, [hasRendered])
  return (
    <div className="py-8 lg:px-8">
      <p className="w-fit lg:px-4 lg:w-max text-2xl text-center text-[#fefefe] text-shadow-black text-shadow-md">This project was built in {repoStats.commits} commits using {repoStats.branches} branches and with {repoStats.pullRequests} PRs on <Link className="tracking-normal hover:tracking-widest transition-all" href="https://github.com/ml-sutton/cse3cwa_assignment1">Github</Link> </p>
      <br />
      <SVGLineup />
    </div>
  )
}
