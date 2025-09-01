import Link from "next/link"

interface TabsHamburgerLinksPropTypes {
  tabName: string
  tabID: number
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
}

export const TabsHamburgerLink: React.FC<TabsHamburgerLinksPropTypes> = ({ tabName, tabID, selectedTab, setSelectedTab }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (selectedTab !== tabID) {
      setSelectedTab(() => tabID)
    }
  }
  return (
    <Link href="" onClick={handleClick}>
      <div className="px-4 py-2 border-b-2 cursor-pointer hover:bg-green-100">
        {tabName}
      </div>
    </Link>
  )
}
