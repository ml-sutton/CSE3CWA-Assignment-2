"use client"
import { useContext, useEffect, useMemo, useState } from "react"
import { Navbar } from "./navbar"
import { TitleCard } from "./titlecard/titlecard"
import { ThemeSwitcher } from "./theme-switcher/themeSwitcher"
export const Header: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const themed = "  "
  return (
    <div className="w-screen flex justify-center lg:justify-end px-8 py-4 bg-[#e2231b] dark:bg-[#242424] text-white border-b-2 dark:border-b-2 border-[#242424] dark:border-[#e2231b]" >
      <TitleCard />
      <div className="flex items-center ml-auto gap-4">
        <div className="hidden lg:block">
          {isMounted && <ThemeSwitcher />}
        </div>
        {isMounted && <Navbar />}
      </div>
    </div>

  )
} 
