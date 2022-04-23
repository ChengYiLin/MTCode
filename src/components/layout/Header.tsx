import { FC, useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const navItemsList = [
    {
        navItemNode: "Home",
    },
    {
        navItemNode: "Blog",
    },
    {
        navItemNode: "Contact",
    },
];

const Header: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0];

        isDarkMode
            ? htmlTag.classList.add("dark")
            : htmlTag.classList.remove("dark");
    }, [isDarkMode]);

    return (
        <header className="h-14">
            <div className="container mx-auto h-full flex">
                <div className="flex items-center">
                    <h1 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                        Martin Code
                    </h1>
                </div>
                <div className="ml-auto flex items-center">
                    <nav>
                        <ul className="flex">
                            {navItemsList.map((navItem) => (
                                <li
                                    key={navItem.navItemNode}
                                    className="font-bold px-6 cursor-pointer hover:text-rose-400"
                                >
                                    {navItem.navItemNode}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center">
                    <div
                        className="p-2.5 border rounded-full cursor-pointer dark:bg-slate-600"
                        onClick={() => setIsDarkMode((prev) => !prev)}
                    >
                        {isDarkMode ? (
                            <FiMoon className="text-xl dark:text-white" />
                        ) : (
                            <FiSun className="text-xl" />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
