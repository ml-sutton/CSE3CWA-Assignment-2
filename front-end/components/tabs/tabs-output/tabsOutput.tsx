import { Tab } from "@/domain/models/tab";


export const TabsOutput: React.FC = () => {

  return (
    <div className={`lg:min-w-1/4 lg:max-w-1/4 flex flex-col py-1 bg-slate-100 dark:bg-slate-800 text-[#111] dark:text-[#fefefe] lg:border-2 lg:rounded-xl`}>
      <div className="flex justify-center gaps-4">
        <button className={`border-2 px-14 rounded-tl-xl py-4 cursor-pointer hover:bg-blue-400 active:border-blue-500 disabled:hover:bg-red-500 disabled:hover:text-red-950 disabled:active:border-red-500 bg-zinc-300 dark:bg-gray-700 text-[#111] dark:text-[#fefefe] text-shadow-md text-shadow-zinc-50 dark:text-shadow-grey-900 border-slate-50 dark:border-zinc-800`} >Compile Tabs</button>
        <button className={`border-2 px-14 rounded-tr-xl py-4 cursor-pointer hover:bg-blue-400 active:border-blue-500 disabled:hover:bg-red-500 disabled:hover:text-red-950 disabled:active:border-red-500 bg-zinc-300 dark:bg-gray-700 text-[#111] dark:text-[#fefefe] text-shadow-md text-shadow-zinc-50 dark:text-shadow-grey-900 border-slate-50 dark:border-zinc-800`}  > Copy to clipboard</button>
      </div>
      <hr />
      <code className="p-4 overflow-y-scroll overflow-x-hidden">
        {"compile some tabs to see some output"}
      </code>
    </div>
  )
}
