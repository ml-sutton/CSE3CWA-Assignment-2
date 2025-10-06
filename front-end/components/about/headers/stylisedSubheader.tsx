import Link from "next/link"
import React from "react"
interface StylizedSubheaderPropTypes {
  text: string
}
export const StylizedSubheader: React.FC<StylizedSubheaderPropTypes> = async ({ text }) => {
  return (<div className="styled-header-wrapper">
    <div className="">
      <div className="flex lg:py-4 lg:px-5 items-center mr-auto justify-center">
        <Link href="https://github.com/ml-sutton" className="group inline-grid grid-cols-1 grid-rows-1 place-items-center">
          <div className="col-start-1 row-start-1">
            <h1 className="col-start-1 row-start-1 text-xl z-20 text-black ml-2 mt-1.5 group-hover:text-[#73c2fb]">{text} </h1>
          </div>
          <div className="col-start-1 row-start-1 z-10">
            <h1 className="text-xl  text-white transition-all">{text}</h1>
          </div>
          <div className="col-start-1 row-start-1 z-0">
            <h1 className="text-xl  text-black transition-all ml-1.25 mt-0.75 group-hover:text-[#F5A9B8] ">{text}</h1>
          </div>
        </Link>
      </div>
    </div>
  </div>)
}
