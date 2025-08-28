"use client"
import { useEffect, useState } from "react";
import useTheme from "../../../../hooks/useTheme";

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(
    () => {
      const savedTheme = localStorage.getItem("currentTheme") as "light" | "dark" | null;
      if (savedTheme) return savedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  )


  useEffect(() => {
    const savedTheme = localStorage.getItem("currentTheme") as "light" | "dark" | null;
    console.log(savedTheme)
    setTheme(savedTheme);
  }, []);
  useTheme(theme);
  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };
  return (<div className={`flex justify-center text-center`}>

    <input
      type="checkbox"
      className="hidden checkbox"
      checked={theme !== "dark"}
      onChange={toggleTheme}
      id="theme-swap"
      name="theme-swap"
    />
    <label className="checkbox-label" htmlFor="theme-swap" aria-label="Toggle dark/light themes">
      <span >toggle dark mode</span>
    </label>
  </div>)
}
