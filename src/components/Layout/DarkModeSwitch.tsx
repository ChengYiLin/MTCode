"use client";

import { FC, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}

const IS_SERVER = typeof window === "undefined";

const DarkModeSwitch: FC = () => {
  const [theme, setTheme] = useState(() => {
    if (IS_SERVER) {
      return ETheme["LIGHT"];
    }

    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }

    if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
      return ETheme["DARK"];
    }

    return ETheme["LIGHT"];
  });

  const toggleWebSiteMode = () => {
    setTheme((prev) =>
      prev === ETheme["DARK"] ? ETheme["LIGHT"] : ETheme["DARK"]
    );
  };

  useEffect(() => {
    if (theme === ETheme["DARK"]) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", ETheme["DARK"]);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", ETheme["LIGHT"]);
    }
  }, [theme]);

  return (
    <button
      className="w-7 h-7 sm:w-10 sm:h-10 flex-center rounded-full bg-dark dark:bg-light"
      aria-label="Dark Mode Switch"
      onClick={(e) => {
        e.preventDefault();
        toggleWebSiteMode();
      }}
    >
      {theme === ETheme["DARK"] ? (
        <MdLightMode className="text-amber-500 text-base sm:text-xl" />
      ) : (
        <MdDarkMode className="text-amber-300 text-base sm:text-xl" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
