import { FC } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkModeButton from "./darkModeButton/DarkModeButton";

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
    return (
        <header className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-gray-800">
            <div className="container mx-auto flex h-full px-4 sm:px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-xl font-black text-transparent dark:from-emerald-400 dark:to-cyan-500 sm:text-2xl">
                        Martin Code
                    </h1>
                </div>
                {/* Desktop Nav */}
                <div className="ml-auto hidden items-center sm:flex">
                    <nav>
                        <ul className="flex">
                            {navItemsList.map((navItem) => (
                                <li
                                    key={navItem.navItemNode}
                                    className="cursor-pointer px-6 font-bold text-emerald-500 dark:text-neutral-50 hover:dark:text-neutral-400"
                                >
                                    <Link href={navItem.link}>
                                        <a>{navItem.navItemNode}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                {/* Dark Mode Button */}
                <div className="ml-auto flex items-center sm:ml-0">
                    <DarkModeButton />
                </div>
                {/* TODO: Mobile Nav */}
                <div className="flex items-center pl-6 sm:hidden">
                    <GiHamburgerMenu className="text-xl" />
                </div>
            </div>
        </header>
    );
};

export default Header;
