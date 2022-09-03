import type { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full flex-col overflow-hidden">
            <Header />
            <main className="grow pt-14">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
