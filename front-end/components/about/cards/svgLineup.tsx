import Link from "next/link"
import { GithubSvgComponent } from "./svg-components/githubSVGComponent"
import { NextSvgComponent } from "./svg-components/nextSVGComponent"
import { ReactSvgComponent } from "./svg-components/reactSVGComponent"
import { TailwindSvgComponent } from "./svg-components/tailwindSVGComponent"
import { TypescriptSvgComponent } from "./svg-components/typescriptSVGComponent"
import React from "react"

export const SVGLineup = async () => {
  return (
    <div className="">
      <h1 className="text-xl text-center text-[#fefefe] text-shadow-black text-shadow-md">Built with novel technologies such as : </h1>

      <div className="py-8 flex gap-6 justify-center">
        <Link href={"https://nextjs.org/docs"}>
          <div className="hover:scale-110 transition-transform duration-150 ease-in-out ">
            <NextSvgComponent />
          </div>
        </Link>
        <Link href={"https://react.dev/"}>
          <div className="hover:scale-110 transition-transform duration-150 ease-in-out ">
            <ReactSvgComponent />
          </div>
        </Link>
        <Link href={"https://www.typescriptlang.org/docs/"}>
          <div className="hover:scale-110 transition-transform duration-150 ease-in-out ">
            <TypescriptSvgComponent />
          </div>
        </Link>
        <Link href={"https://v2.tailwindcss.com/docs"}>
          <div className="hover:scale-110 transition-transform duration-150 ease-in-out ">
            <TailwindSvgComponent />
          </div>
        </Link>
        <Link href={"https://github.com/"}>
          <div className="hover:scale-110 transition-transform duration-150 ease-in-out ">
            <GithubSvgComponent />
          </div>
        </Link>
      </div>
    </div>)

}
