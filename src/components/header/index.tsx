import type { FC } from 'react';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import useScrollPosition from '../../hooks/useScrollPosition';

const Header: FC = () => {
    // const router = useRouter();
    const [isOverHeader, setIsOverHeader] = useState(false);

    useScrollPosition(
        ({ currPos }) => {
            setIsOverHeader(currPos.y < -60);
        },
        [setIsOverHeader]
    );

    return (
        <header className="relative">
            <div
                className={`fixed top-0 left-0 right-0 transition ease-in duration-500 w-screen ${
                    isOverHeader ? 'bg-neutral-800' : 'bg-transparent'
                }`}
            >
                <div className="container flex justify-between items-center px-4 py-3 mx-auto">
                    {/* Logo */}
                    <div className="h-8 flex items-center text-2xl text-white">
                        Martin Code
                        {/* <Image
                            className="cursor-pointer"
                            src="/logo.svg"
                            alt="Logo"
                            width="160"
                            height="20"
                            layout="fixed"
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/');
                            }}
                        /> */}
                    </div>
                    {/* Desktop NavBar */}
                    <nav className="hidden md:flex items-center font-bold text-white">
                        <Link href="/">
                            <a className="px-4">Home</a>
                        </Link>
                        <Link href="/blog">
                            <a className="px-4">Blog</a>
                        </Link>
                    </nav>
                    {/* Mobile Hamburger */}
                    <div className="block md:hidden">
                        <Image
                            className="cursor-pointer"
                            src="/hamburger.svg"
                            alt="Mobile_Menu"
                            width="24"
                            height="24"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
