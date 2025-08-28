import { SetStateAction } from "react"
import { Tab } from "../../../../../utils/tabs/models/tab"
import { TabsHamburgerButton } from "./tabsHamburgerButton"
import { TabsHamburgerLink } from "./tabsHamburgerLink"

interface TabsHamburgerMenuPropTypes {
  tabs: Tab[]
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
}
export const TabsHamburgerMenu: React.FC<TabsHamburgerMenuPropTypes> = ({ tabs, selectedTab, setSelectedTab }) => {

  return (
    <div className="">
      <div className="">
        <TabsHamburgerButton />
      </div>
      <div className="">
        <nav>
          <ul>{tabs.map((tab, key) => (<li key={key}><TabsHamburgerLink tabName={tab.tabName} tabID={tab.tabId} selectedTab={selectedTab} setSelectedTab={setSelectedTab} /></li>))}</ul>
        </nav>
      </div>
    </div>
  )
}
