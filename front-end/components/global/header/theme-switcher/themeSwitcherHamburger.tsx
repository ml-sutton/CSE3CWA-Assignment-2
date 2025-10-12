"use client"
import { useEffect, useState } from "react";

export const ThemeSwitcherHamburger = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const savedTheme = document.cookie.split('; ').find(row => row.startsWith('currentTheme='))?.split('=')[1] as "light" | "dark" | undefined;
    setTheme(savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      document.cookie = `currentTheme=${next}; path=/; max-age=31536000; SameSite=Lax`;
      console.log(next)
      return next;
    });
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
