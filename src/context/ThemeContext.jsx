import {
  useEffect,
  useState,
} from "react";

import {
  ThemeContext,
} from "./theme-context";

export default function ThemeProvider({
  children,
}) {

  const [theme, setTheme] =
    useState("dark");

  useEffect(() => {

    document.body.setAttribute(
      "data-theme",
      theme
    );

  }, [theme]);

  const toggleTheme = () => {

    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );

  };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  );
}