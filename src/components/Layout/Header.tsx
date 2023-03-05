import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import DarkModeSwitch from './DarkModeSwitch';
import MobileMenu from './MobileMenu';

const Header: FC = () => {
  return (
    <header className="fixed inset-x-0 z-10 border-b-2 border-slate-200 bg-light dark:border-slate-500 dark:bg-dark">
      <div className="mx-auto box-border flex h-14 max-w-screen-xl items-center justify-between px-4 py-2 sm:h-16 sm:px-8">
        <Link href="/">
          <div className="flex cursor-pointer select-none items-center gap-2 hover:text-primary">
            <div className="relative h-9 w-9 sm:h-12 sm:w-12">
              <Image src="/logo/rose.png" alt="Logo" fill />
            </div>
            <span className="text text-lg font-bold transition-colors duration-150 sm:text-[24px]">
              Martin Code
            </span>
          </div>
        </Link>
        <nav className="hidden gap-4 sm:flex">
          <Link href="/Blog">
            <div className="px-4 py-2 transition-colors duration-150 hover:text-primary">
              總覽
            </div>
          </Link>
          <Link href="/About">
            <div className="px-4 py-2 transition-colors duration-150 hover:text-primary">
              關於我
            </div>
          </Link>
          <DarkModeSwitch />
        </nav>
        <div className="flex gap-4 sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
