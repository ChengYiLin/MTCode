'use client';

import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { RiCloseLine, RiMenuFoldLine } from 'react-icons/ri';

import NavMenu from './NavList';

const MobileMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
    setShowMenu(false);
  };

  return (
    <>
      <div className="pl-2" onClick={() => setShowMenu((prev) => !prev)}>
        <RiMenuFoldLine className="cursor-pointer text-2xl" />
      </div>
      <div
        className={`fixed inset-0 z-30 flex justify-end bg-slate-50/25 backdrop-blur-lg dark:bg-slate-400/25 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="basis-1/6" onClick={() => setShowMenu(false)} />
        <div
          className={`flex h-full basis-5/6 flex-col bg-slate-100 transition-transform dark:bg-slate-800 ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="box-border flex basis-14 items-center justify-between border-b-2 px-4 py-3">
            <div onClick={() => setShowMenu(false)}>
              <RiCloseLine className="cursor-pointer text-2xl" />
            </div>
          </div>
          <div className="grow basis-auto">
            <nav>
              {NavMenu.map((navItem) => (
                <div
                  key={navItem.title}
                  className="cursor-pointer border-b-2 px-4 py-3 hover:bg-slate-200 dark:hover:bg-slate-700"
                  onClick={() => handleNavigate(navItem.path)}
                >
                  {navItem.title}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
