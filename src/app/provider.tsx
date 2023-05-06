'use client';
import { ThemeProvider } from 'next-theme';
import { FC, ReactNode } from 'react';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
