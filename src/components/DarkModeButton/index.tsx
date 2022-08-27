import { FC, useState, useEffect } from "react";

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
            {isDarkMode ? <span>Moon</span> : <span>Sun</span>}
        </div>
    );
};

export default DarkModeButton;
