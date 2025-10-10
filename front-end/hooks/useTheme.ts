import { useEffect } from "react";

const generateThemeCookie = (theme: "dark" | "light") => {
  const yearInSeconds = 60 * 60 * 24 * 365;
  document.cookie = `currentTheme=${encodeURIComponent(theme)}; Max-Age=${yearInSeconds}; SameSite=Strict; path=/`
}

export default function useTheme(theme: "light" | "dark" | null) {
  useEffect(() => {
    let themeToApply: "light" | "dark";

    if (theme === null) {
      // Detect system preference
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      themeToApply = isDark ? "dark" : "light";
    } else {
      themeToApply = theme;
    }

    document.documentElement.setAttribute("data-theme", themeToApply);
    localStorage.setItem("currentTheme", themeToApply);
    generateThemeCookie(themeToApply);

    if (theme === null) {
      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handler = (event: MediaQueryListEvent) => {
        const newTheme = event.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("currentTheme", newTheme);
        generateThemeCookie(newTheme);
      };

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);
}
