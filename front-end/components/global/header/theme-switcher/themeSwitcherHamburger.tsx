"use client"
import useTheme from "../../../../hooks/useTheme";
import { useEffect, useState } from "react";

export const ThemeSwitcherHamburger = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(() => {
    const savedTheme = localStorage.getItem("currentTheme") as "light" | "dark" | null;
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  })
  useTheme(theme);


  useEffect(() => {
    const savedTheme = localStorage.getItem("currentTheme") as "light" | "dark" | null;
    setTheme(savedTheme ?? null);
  }, []);
  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`py-4 px-4 transition-all w-screen lg:hidden flex justify-end border-l-2 border-b-2 border-r-2 lg:border-r-0 bg-[#e2231b] dark:bg-[#242424] text-white border-[#242424] dark:border-[#e2231b] hover:bg-[#88140e] dark:hover:bg-[#444444]`}>
      <div className={`flex justify-center text-center`}>

        <input
          type="checkbox"
          className="hidden nav--checkbox"
          checked={theme !== "dark"}
          onChange={toggleTheme}
          id="nav--theme-swap"
          name="nav--theme-swap"
        />
        <label className="nav--checkbox-label" htmlFor="nav--theme-swap" aria-label="Toggle dark/light themes">
          <span >toggle dark mode</span>
        </label>
      </div>
      <h1 className="ml-auto text-3xl capitalize">current theme : {theme} </h1>
    </div>
  )
}
