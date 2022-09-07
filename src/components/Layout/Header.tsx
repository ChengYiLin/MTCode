import { FC, SyntheticEvent, useState } from "react";
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
];

const Header: FC = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    const clickHamburgerMenu = (e: SyntheticEvent) => {
        e.preventDefault();
        const bodyTag = document.getElementsByTagName("body");

        setIsOpenMobileMenu((prevStatus) => {
            prevStatus
                ? bodyTag[0].style.setProperty("overflow", "visible")
                : bodyTag[0].style.setProperty("overflow", "hidden");

            return !prevStatus;
        });
    };

    return (
        <header className="fixed top-0 left-0 z-30 h-14 w-full bg-white">
            <div className="container relative mx-auto flex h-full items-center px-4 lg:px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="bg-gradient-main bg-clip-text font-carter text-xl font-bold sm:text-2xl">
                        <Link href="/">Martin Lin</Link>
                    </h1>
                </div>
                {/* Desktop Nav */}
                <div className="ml-auto">
                    <nav className="hidden sm:block">
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
                    <div className="block sm:hidden">
                        <HamburgerMenu
                            isOpen={isOpenMobileMenu}
                            handleToggle={clickHamburgerMenu}
                        />
                    </div>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`absolute top-14 block h-[calc(100vh-56px)] w-screen bg-slate-100 transition-[left] duration-500 sm:hidden ${
                        isOpenMobileMenu ? "left-0" : "left-full"
                    }`}
                >
                    <nav className="container mx-auto">
                        <ul>
                            {navItemsList.map((navItem) => (
                                <li
                                    key={navItem.navItemNode}
                                    className="cursor-pointer text-xl font-bold hover:text-emerald-500"
                                    onClick={clickHamburgerMenu}
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
