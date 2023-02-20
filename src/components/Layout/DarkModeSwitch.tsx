"use client";

import { FC, useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}

const DarkModeSwitch: FC = () => {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" &&
    window?.matchMedia("(prefers-color-scheme: dark)").matches
      ? ETheme["DARK"]
      : ETheme["LIGHT"]
  );

  const toggleWebSiteMode = () => {
    setTheme((prev) =>
      prev === ETheme["DARK"] ? ETheme["LIGHT"] : ETheme["DARK"]
    );
  };

  useEffect(() => {
    if (theme === ETheme["DARK"]) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="px-3 py-1 rounded-full border-4 bg-rose-100 border-rose-100 hover:border-rose-300"
      onClick={(e) => {
        e.preventDefault();
        toggleWebSiteMode();
      }}
    >
      {theme === ETheme["DARK"] ? (
        <MdOutlineLightMode className="text-primary" />
      ) : (
        <MdOutlineDarkMode className="text-primary" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
