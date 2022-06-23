import type { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <div className="bg-light dark:bg-dark flex min-h-screen select-none flex-col">
            <Header />
            <main className="grow basis-full">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
