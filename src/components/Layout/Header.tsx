import Link from "next/link";
import { FC } from "react";

import Logo from "../Logo";

const NavBarLink = [
  {
    link: "/Blog/category/frontend",
    text: "關於我",
  },
];

const Header: FC = () => {
  return (
    <header className="border-b-2 border-light">
      <div className="py-4 container mx-auto flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-4">
          <Link href="/Blog">
            <div className="px-4 py-2 hover:text-primary transition-colors duration-300">
              總攬
            </div>
          </Link>
          <Link href="/About">
            <div className="px-4 py-2 hover:text-primary transition-colors duration-300">
              關於我
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
