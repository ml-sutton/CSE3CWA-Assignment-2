"use client"

import Link from "next/link"

interface HamburgerLinkPropTypes {
  name: string
  href: string
  isActive: boolean
}

export const HamburgerLink: React.FC<HamburgerLinkPropTypes> = ({ name, href, isActive }) => {
  return (
    <Link href={href} className="">
      <div className={`
        py-4 px-4 lg:px-8 w-screen text-xl lg:text-base lg:w-max lg:text-center 
        border-l-2 border-b-2 border-t-2 border-r-2 lg:border-t-0 lg:border-l-0 
        ${isActive ? "lg:border-b-4" : `lg:border-b-0 lg:hover:border-b-4 lg:border-b-blue-300 lg:hover:dark:border-b-blue-300`}
        lg:border-r-0 bg-[#e2231b] dark:bg-[#242424]
        text-white border-[#242424] dark:border-[#e2231b] hover:bg-[#88140e] dark:hover:bg-[#444444]`}>
        {name}
      </div>
    </Link>
  )
}
