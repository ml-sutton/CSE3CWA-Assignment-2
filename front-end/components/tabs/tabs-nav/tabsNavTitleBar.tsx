interface TabsNavTitleBarPropTypes {
  tabName: string
}
export const TabsNavTitleBar: React.FC<TabsNavTitleBarPropTypes> = ({ tabName }) => {
  return (<div className="px-2 lg:px-12 py-4">
    <h1 className="lg:text-center font-bold text-2xl italic">TABS</h1>
    <h3>Current tab: {tabName}</h3>
  </div>)
}
