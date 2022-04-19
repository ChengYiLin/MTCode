import type { FC, ReactNode } from "react";
import { Fragment } from "react";

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <Fragment>
            <header className="bg-indigo-500">This is header</header>
            {children}
            <footer className="bg-fuchsia-400">This is footer</footer>
        </Fragment>
    );
};

export default Layout;
