import { FC, useState } from "react";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";

const navItemsList = [
    {
        navItemNode: "Home",
        link: "/",
    },
    {
        navItemNode: "Blog",
        link: "/blog",
    },
    {
        navItemNode: "About",
        link: "/about",
    },
];

const Header: FC = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    return (
        <header className="sticky top-0 left-0 right-0 h-16 bg-transparent shadow-sm">
            <div className="container mx-auto flex h-full px-4 sm:px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="text-gradient-color text-2xl font-bold">
                        Martin Lin
                    </h1>
                </div>
                {/* Desktop Nav */}
                <div className="ml-auto flex items-center">
                    <nav className="hidden md:block">
                        <ul className="flex">
                            {navItemsList.map((navItem) => (
                                <li
                                    key={navItem.navItemNode}
                                    className="cursor-pointer px-6 font-bold text-neutral-900"
                                >
                                    <Link href={navItem.link}>
                                        <a>{navItem.navItemNode}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="block md:hidden">
                        <HamburgerMenu
                            isOpen={isOpenMobileMenu}
                            handleToggle={() =>
                                setIsOpenMobileMenu((prev) => !prev)
                            }
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
