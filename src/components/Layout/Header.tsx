import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import DarkModeSwitch from "./DarkModeSwitch";
import MobileMenu from "./MobileMenu";

const Header: FC = () => {
  return (
    <header className="relative">
      <div className="py-2 sm:py-4 container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="pl-2 sm:pl-0 flex items-center gap-2 select-none cursor-pointer hover:text-primary">
            <div className="w-9 h-9 sm:w-12 sm:h-12 relative">
              <Image src="/logo/rose.png" alt="Logo" fill />
            </div>
            <span className="text-lg sm:text-[24px] font-bold transition-colors duration-300 text">
              Martin Code
            </span>
          </div>
        </Link>
        <nav className="sm:flex gap-4 hidden">
          <Link href="/Blog">
            <div className="px-4 py-2 hover:text-primary transition-colors duration-150">
              總覽
            </div>
          </Link>
          <Link href="/About">
            <div className="px-4 py-2 hover:text-primary transition-colors duration-150">
              關於我
            </div>
          </Link>
          <DarkModeSwitch />
        </nav>
        <div className="sm:hidden flex gap-4">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;