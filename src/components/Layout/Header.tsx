import Link from "next/link";
import { FC } from "react";

import Logo from "../Logo";
import DarkModeSwitch from "./DarkModeSwitch";

const Header: FC = () => {
  return (
    <header>
      <div className="py-4 container mx-auto flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-4">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
