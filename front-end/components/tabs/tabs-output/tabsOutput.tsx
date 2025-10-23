"use client"
import CompileTabs from "@/utils/tabs/data-access/compileTabs";
import { useState } from "react";


export const TabsOutput: React.FC = () => {
  const [output, setOutput] = useState("compile some tabs to see some output!. Compiling tabs only compiles tabs stored in the cloud!")
  const compileTabs = () => {
    CompileTabs().then(value => setOutput(value)).catch(err => setOutput(err))
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
  }







  return (
    <div className={`lg:min-w-1/4 lg:max-w-1/4 flex flex-col py-1 bg-slate-100 dark:bg-slate-800 text-[#111] dark:text-[#fefefe] lg:border-2 lg:rounded-xl`}>
      <div className="flex justify-center gaps-4">
        <button className={`border-2 px-14 rounded-tl-xl py-4 cursor-pointer hover:bg-blue-400 active:border-blue-500 disabled:hover:bg-red-500 disabled:hover:text-red-950 disabled:active:border-red-500 bg-zinc-300 dark:bg-gray-700 text-[#111] dark:text-[#fefefe] text-shadow-md text-shadow-zinc-50 dark:text-shadow-grey-900 border-slate-50 dark:border-zinc-800`} onClick={compileTabs}>Compile Tabs</button>
        <button className={`border-2 px-14 rounded-tr-xl py-4 cursor-pointer hover:bg-blue-400 active:border-blue-500 disabled:hover:bg-red-500 disabled:hover:text-red-950 disabled:active:border-red-500 bg-zinc-300 dark:bg-gray-700 text-[#111] dark:text-[#fefefe] text-shadow-md text-shadow-zinc-50 dark:text-shadow-grey-900 border-slate-50 dark:border-zinc-800`} onClick={copyToClipboard} > Copy to clipboard</button>
      </div>
      <hr />
      <code className="p-4 overflow-y-scroll overflow-x-hidden">
        {output}
      </code>
    </div>
  )
}
