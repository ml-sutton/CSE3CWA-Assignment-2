

export const TabsForm: React.FC = () => {


  // return tabs.length == 0 ? (
  //   <div className={`min-w-1/2 h-full flex justify-center items-center px-4`}>
  //     <div className={`${themedStyles} border-2 rounded-xl w-full px-8 py-4 flex justify-center items-center flex-col`}>
  //       <h1 className="text-2xl">You haven&#39;t created any tabs yet!</h1>
  //       <p className="text-xl">Press the + button on the lefthand side of the screen to create some tabs!</p>
  //     </div>
  //   </div>
  // ) : tabName === "No Tab Selected" ? (
  //   <div className="min-w-1/2 h-full flex justify-center items-center px-4">
  //     <div className={`${themedStyles} border-2 rounded-xl w-full px-8 py-4 flex justify-center items-center flex-col`}>
  //       <h1 className="text-2xl">No tab selected!</h1>
  //       <p className="text-xl">please select a tab from the sidebar</p>
  //     </div>
  //   </div>
  // ) :
  return (<div className={`min-w-2/3 lg:min-w-1/2 h-full  py-4 lg:p-4`}>
    <form >
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
