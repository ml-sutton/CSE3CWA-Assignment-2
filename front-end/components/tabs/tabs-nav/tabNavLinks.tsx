import Link from "next/link"
import React from "react"

interface TabNavLinksPropTypes {
  tabName: string
  tabID: number
  selectedTab: number

}
export const TabNavLink: React.FC<TabNavLinksPropTypes> = ({ tabName, tabID, selectedTab }) => {


  return (
    <Link href={`/${tabID}`}>
      <div className="px-4 py-2 border-b-2 cursor-pointer hover:bg-blue-300 hover:text-shadow-md  hover:text-shadow-white dark:hover:text-shadow-black">
        {tabName}
      </div>
    </Link>
  )
}
