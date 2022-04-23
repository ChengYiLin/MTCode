import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkModeButton from "./darkModeButton/DarkModeButton";

const navItemsList = [
    {
        navItemNode: "Home",
    },
    {
        navItemNode: "Blog",
    },
];

const Header: FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-gray-800">
            <div className="container mx-auto h-full flex px-4 sm:px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 sm:text-2xl">
                        Martin Code
                    </h1>
                </div>
                {/* Desktop Nav */}
                <div className="hidden ml-auto items-center sm:flex">
                    <nav>
                        <ul className="flex">
                            {navItemsList.map((navItem) => (
                                <li
                                    key={navItem.navItemNode}
                                    className="font-bold px-6 cursor-pointer text-emerald-500 dark:text-neutral-50"
                                >
                                    {navItem.navItemNode}
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
