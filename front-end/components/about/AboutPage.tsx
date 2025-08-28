import { MainCard } from "./cards/mainCard"

export const AboutPage = () => {
  return (
    <div className={`w-screen flex min-h-[85vh] overflow-x-clip justify-center px-4 py-8 bg-gradient-to-r from-slate-300 dark:from-slate-900 to-slate-500 dark:to-slate-700 text-[#111] dark:text-[#fefefe]`} >
      <MainCard />
    </div>
  )
}
