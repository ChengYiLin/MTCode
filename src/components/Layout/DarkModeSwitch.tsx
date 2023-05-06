'use client';

import useTheme from 'next-theme';
import { FC } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { ETheme } from '@/types/enum';

const DarkModeSwitch: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleWebSiteMode = () => {
    setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);
  };

  return (
    <button
      className="flex-center h-7 w-7 rounded-full bg-dark dark:bg-light sm:h-10 sm:w-10"
      aria-label="Dark Mode Switch"
      onClick={(e) => {
        e.preventDefault();
        toggleWebSiteMode();
      }}
    >
      {theme === ETheme.DARK ? (
        <MdLightMode className="text-base text-amber-500 sm:text-xl" />
      ) : (
        <MdDarkMode className="text-base text-amber-300 sm:text-xl" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
