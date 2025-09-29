"use client"
import { useState } from "react";

interface ThemeSwitcherPropType {
  theme: "dark" | "light"
}

export const ThemeSwitcher: React.FC<ThemeSwitcherPropType> = (props) => {
  const [theme, setTheme] = useState<"light" | "dark">(props.theme);


  const toggleTheme = () => setTheme(prev => {
    const next = prev === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    document.cookie = `currentTheme=${next}; path=/; max-age=31536000; SameSite=Lax`;
    console.log(next)

    return next;
  });


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
