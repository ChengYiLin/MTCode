import { FC, useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeButton: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0];

        isDarkMode
            ? htmlTag.classList.add("dark")
            : htmlTag.classList.remove("dark");
    }, [isDarkMode]);

    return (
        <div
            className="cursor-pointer rounded-full bg-teal-100 p-2.5 dark:bg-gray-700"
            onClick={() => setIsDarkMode((prev) => !prev)}
        >
            {isDarkMode ? (
                <FiMoon className="text-nav-color text-xl" />
            ) : (
                <FiSun className="text-nav-color text-xl" />
            )}
        </div>
    );
};

export default DarkModeButton;
