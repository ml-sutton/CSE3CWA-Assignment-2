import Link from "next/link"
import React from "react"

interface TabNavLinksPropTypes {
  tabName: string
  tabID: number
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
  
}
export const TabNavLink: React.FC<TabNavLinksPropTypes> = ({ tabName, tabID, selectedTab, setSelectedTab }) => {

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (selectedTab !== tabID) {
      setSelectedTab(() => tabID)
      
    }
  }
  return (
    <Link href="" onClick={handleClick}>
      <div className="px-4 py-2 border-b-2 cursor-pointer hover:bg-green-400">
        {tabName}
      </div>
    </Link>
  )
}
