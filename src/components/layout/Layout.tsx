import type { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="grow basis-full pt-14">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
