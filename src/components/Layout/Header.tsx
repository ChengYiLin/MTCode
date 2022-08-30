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
        <header className="sticky top-0 left-0 h-16 w-full bg-slate-50">
            <div className="container mx-auto flex h-full items-center px-4 lg:px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="bg-gradient-main bg-clip-text font-carter text-2xl font-bold">
                        <Link href="/">Martin Lin</Link>
                    </h1>
                </div>
                {/* Desktop Nav */}
                <div className="ml-auto">
                    <nav className="hidden md:block">
                        <ul className="flex items-center">
                            {navItemsList.map((navItem) => (
                                <Link
                                    href={navItem.link}
                                    key={navItem.navItemNode}
                                >
                                    <li className="text-md cursor-pointer transition hover:font-bold hover:text-emerald-500">
                                        <a className="block py-4 px-6">
                                            {navItem.navItemNode}
                                        </a>
                                    </li>
                                </Link>
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
                {/* Mobile Nav */}
                <div
                    className={`absolute top-16 block h-[calc(100vh-64px)] w-screen bg-slate-100 transition-[left] duration-500 md:hidden ${
                        isOpenMobileMenu ? "left-0" : "left-full"
                    }`}
                >
                    <nav className="container mx-auto">
                        <ul>
                            {navItemsList.map((navItem) => (
                                <li
                                    key={navItem.navItemNode}
                                    className="cursor-pointer text-xl font-bold hover:text-emerald-500"
                                    onClick={() => setIsOpenMobileMenu(false)}
                                >
                                    <Link href={navItem.link}>
                                        <a className="block px-4 py-6">
                                            {navItem.navItemNode}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
