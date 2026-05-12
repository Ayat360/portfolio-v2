import {
  useContext,
} from "react";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

import {
  ThemeContext,
} from "../context/theme-context";

export default function ThemeToggle() {

  const {
    theme,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {
        theme === "dark"
          ? <FaSun />
          : <FaMoon />
      }
    </button>
  );
}