import { FC } from "react";

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
    return (
        <header className="h-14 bg-indigo-200">
            <div className="container mx-auto h-full flex">
                <h1>This is Logo</h1>
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
            </div>
        </header>
    );
};

export default Header;
