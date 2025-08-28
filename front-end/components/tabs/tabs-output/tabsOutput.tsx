import { useState } from "react";
import { GenerateTabOutput } from "../../../utils/tabs/generator/GenerateOutput";
import { Tab } from "@/domain/models/tab";

interface TabsOutputPropTypes {
  tabs: Tab[]
}

export const TabsOutput: React.FC<TabsOutputPropTypes> = ({ tabs }) => {
  const [outputData, setOutputData] = useState<string>("");
  const themed1 = ""
  const themed2 = " "
  const themedBtn1 = "bg-zinc-300 text-[#111] text-shadow-md text-shadow-zinc-50 border-slate-50"
  const themedBtn2 = "bg-gray-700 text-[#fefefe] text-shadow-md text-shadow-grey-900 border-zinc-800"
  const handleTabCompilation = () => {
    if (tabs.length === 0) return;
    const data = GenerateTabOutput(tabs);
    setOutputData(data);
  }

  const copyDataToClipboard = () => {
    navigator.clipboard.writeText(outputData)
  }
  return (
    <div className={`lg:min-w-1/4 flex flex-col py-1 bg-slate-100 dark:bg-slate-800 text-[#111] dark:text-[#fefefe] border-2 rounded-xl`}>
      <div className="flex justify-center gaps-4">
        <button className={`border-2 px-14 rounded-tl-xl py-4 cursor-pointer hover:bg-green-500 active:border-blue-500 disabled:hover:bg-red-500 disabled:hover:text-red-950 disabled:active:border-red-500 ${themedButtonStyles}`} onClick={() => handleTabCompilation()} disabled={tabs.length === 0}>Compile Tabs</button>
        <button className={`border-2 px-14 rounded-tr-xl py-4 cursor-pointer hover:bg-green-500 active:border-blue-500 disabled:hover:bg-red-500 disabled:hover:text-red-950 disabled:active:border-red-500 ${themedButtonStyles}`} onClick={() => copyDataToClipboard()} disabled={outputData === ""}> Copy to clipboard</button>
      </div>
      <hr />
      <code className="p-4 overflow-y-scroll overflow-x-hidden">
        {outputData === "" ? "compile some tabs to see some output" : outputData}
      </code>
    </div>
  )
}
