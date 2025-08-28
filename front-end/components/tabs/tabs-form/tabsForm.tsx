import React, { useContext, useEffect, useState } from "react"
import { Tab } from "../../../utils/tabs/models/tab"
import GetTabByID from "../../../utils/tabs/data-access/GetTabByID"
import { ThemeContext } from "../../../utils/theme/context/themeContext"
interface TabsFormPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
  tabCount: number
  loadedData: boolean
}

export const TabsForm: React.FC<TabsFormPropTypes> = ({ tabs, setTabs, selectedTab, tabCount, loadedData }) => {
  const themeContext = useContext(ThemeContext);
  const themedStyles: string = themeContext?.theme === "light" ? "bg-slate-100 text-[#111]" : "lg:bg-slate-800 text-[#fefefe]"
  const [tabCreated, setTabCreated] = useState<boolean>(false);
  const dbTabName = tabs[selectedTab] !== undefined ? tabs[selectedTab].tabName : "No Tab Selected";
  const dbTabBody = tabs[selectedTab] !== undefined ? tabs[selectedTab].tabBody : "No Tab Selected or no tabs exists"
  const [tabName, setTabName] = useState<string>(dbTabName);
  const [tabData, setTabData] = useState<string>(dbTabBody);
  useEffect(() => {
    if (tabs.length === 0) return
    GetTabByID(tabs, selectedTab).then(tabValue => {
      setTabName(tabValue.tabName)
      setTabData(tabValue.tabBody)
    }).catch(error => {
      console.warn(error)
      setTabName("No Tab Selected");
      setTabData("No Tab Selected or no tabs exists");
    })
    // eslint-disable-next-line
  }, [selectedTab])
  const handleTabName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (tabName === "No Tab Selected") return;
    setTabName(event.target.value);
    const tabsCopy = [...tabs];
    GetTabByID(tabsCopy, selectedTab).then(tabValue => {
      const tabToEdit = tabValue.tabId;
      tabsCopy.forEach((tabItem) => {
        if (tabItem.tabId === tabToEdit) {
          tabItem.tabName = tabName;
          setTabs(tabsCopy);

        }
      });
    }).catch(error => {
      console.warn(error)
    })

  }
  const handleTabData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (tabName === "No Tab Selected") return;
    setTabData(event.target.value)
    const tabsCopy = [...tabs];
    GetTabByID(tabsCopy, selectedTab).then(tabValue => {
      const tabToEdit = tabValue.tabId;
      tabsCopy.forEach((tabItem) => {
        if (tabItem.tabId === tabToEdit) {
          tabItem.tabBody = tabData;
          setTabs(tabsCopy)
        }
      })
    }).catch(error => {
      console.error(error)
    })
  }
  const preventEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  useEffect(() => {
    if (tabCount === 0) {
      setTabName("No Tab Selected");
      setTabData("No Tab Selected or no tabs exists");
      return
    } else if (tabCount === 1) {
      // For some reason this is the only way to get it to work I do not know why I have spent so long on this
      if (tabCreated) return;
      setTabName(tabs[0] ? tabs[0].tabName : `${tabCount}`)
      setTabData(tabs[0] ? tabs[0].tabBody : `${tabCount}`)
      setTabCreated(true);
      return
    }

  }, [loadedData, tabs])


  return tabs.length == 0 ? (
    <div className={`min-w-1/2 h-full flex justify-center items-center px-4`}>
      <div className={`${themedStyles} border-2 rounded-xl w-full px-8 py-4 flex justify-center items-center flex-col`}>
        <h1 className="text-2xl">You haven&#39;t created any tabs yet!</h1>
        <p className="text-xl">Press the + button on the lefthand side of the screen to create some tabs!</p>
      </div>
    </div>
  ) : tabName === "No Tab Selected" ? (
    <div className="min-w-1/2 h-full flex justify-center items-center px-4">
      <div className={`${themedStyles} border-2 rounded-xl w-full px-8 py-4 flex justify-center items-center flex-col`}>
        <h1 className="text-2xl">No tab selected!</h1>
        <p className="text-xl">please select a tab from the sidebar</p>
      </div>
    </div>
  ) :
    (<div className={`min-w-2/3 lg:min-w-1/2 h-full  py-4 lg:p-4`}>
      <form onSubmit={preventEnter}>
        <div className={`border-2 rounded-t-xl lg:border-0 lg:py-4 flex justify-between py-2 lg:justify-start `}>
          <label htmlFor="tab-name-input" className={`lg:text-xl lg:border-2 border-r-0 px-4 lg:px-8 lg:py-[11px] rounded-l-lg ${themedStyles}`}>Tab Name : </label>
          <input className={`lg:text-xl lg:border-2 border-l-0 lg:px-8 lg:py-2 rounded-tr-xl lg:rounded-r-lg active:border-blue-800 hover:border-blue-500 ${themedStyles}`} type="text" id="tab-name-input" value={tabName} onChange={handleTabName} />
        </div>
        <div className="lg:border-t-2 lg:pt-4">

          <textarea rows={25} name="tab-data-input" className={`text-shadow-md py-4 text-lg lg:text-xl lg:rounded-t-xl rounded-b-xl border-2 border-t-0 lg:border-t-2  hover:border-blue-500 active:border-blue-800 border-gray-300 px-4 min-w-full h-full lg:resize-none ${themedStyles}`} value={tabData} onChange={handleTabData}></textarea>
        </div>
      </form>
    </div>)

}
