import type { FC } from 'react';
import Link from 'next/link';
import Logo from '../logo';

const Header: FC = () => {
    return (
        <header className="sticky top-0">
            <div className="flex px-4 py-3 justify-between">
                <Link href="/">
                    <Logo width="180" height="30" />
                </Link>
                <nav className="flex">
                    <a href="#Section1" className="px-4">
                        Home
                    </a>
                    <a href="#Section2" className="px-4">
                        Work
                    </a>
                    <a href="#Section3" className="px-4">
                        Project
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
