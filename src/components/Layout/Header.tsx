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
        <header className="sticky top-0 left-0 right-0 h-16 ">
            <div className="container mx-auto flex h-full px-4 sm:px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="text-gradient-color text-2xl font-bold">
                        <Link href="/">Martin Lin</Link>
                    </h1>
                </div>
                {/* Desktop Nav */}
                <div className="ml-auto flex items-center">
                    <nav className="hidden md:block">
                        <ul className="flex">
                            {navItemsList.map((navItem) => (
                                <li
                                    key={navItem.navItemNode}
                                    className="text-md cursor-pointer px-6 transition hover:font-bold hover:text-emerald-500"
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
            {/* Mobile Nav */}
            <div
                className={`absolute inset-x-0 h-[calc(100vh-64px)] bg-slate-50 ${
                    isOpenMobileMenu ? "block" : "hidden"
                }`}
            >
                <nav className="container mx-auto px-4">
                    <ul>
                        {navItemsList.map((navItem) => (
                            <li
                                key={navItem.navItemNode}
                                className="my-6 cursor-pointer text-xl font-bold hover:text-emerald-500"
                                onClick={() => setIsOpenMobileMenu(false)}
                            >
                                <Link href={navItem.link}>
                                    <a>{navItem.navItemNode}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
