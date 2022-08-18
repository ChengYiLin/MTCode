import type { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
