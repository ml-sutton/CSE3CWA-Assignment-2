"use client"
import { useContext } from "react";
import { MainCard } from "./cards/mainCard"
import { ThemeContext } from "../../utils/theme/context/themeContext";

export const AboutPage = () => {
  const themeContext = useContext(ThemeContext);
  const themedStyles = themeContext?.theme == "light" ? "bg-gradient-to-r from-slate-300 to-slate-500 text-[#111]" : "bg-gradient-to-r from-slate-900 to-slate-700 text-[#fefefe]"
  return (
    <div className={`w-screen flex min-h-[85vh] overflow-x-clip justify-center px-4 py-8 ${themedStyles}`} >
      <MainCard />
    </div>
  )
}
