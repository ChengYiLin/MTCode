"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, MouseEvent, useState } from "react";
import { RiCloseLine, RiMenuFoldLine } from "react-icons/ri";

import DarkModeSwitch from "./DarkModeSwitch";

const MobileMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const handleNavigate = (e: MouseEvent, route: string) => {
    e.preventDefault();
    router.push(route);
    setShowMenu(false);
  };

  return (
    <>
      <div className="pl-2" onClick={() => setShowMenu((prev) => !prev)}>
        <RiMenuFoldLine className="text-2xl cursor-pointer" />
      </div>
      <div
        className={`fixed inset-0 bg-slate-50/25 dark:bg-slate-400/25 backdrop-blur-lg flex justify-end z-30 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="basis-1/6" onClick={() => setShowMenu(false)} />
        <div
          className={`basis-5/6 h-full bg-slate-100 dark:bg-slate-800 flex flex-col transition-transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="basis-14 box-border px-4 py-3 border-b-2 flex justify-between items-center">
            <div>
              <DarkModeSwitch />
            </div>
            <div onClick={() => setShowMenu(false)}>
              <RiCloseLine className="text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="grow basis-auto">
            <nav>
              <Link href="/Blog">
                <div className="px-4 py-3 border-b-2 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">
                  總覽
                </div>
              </Link>
              <Link href="/About">
                <div className="px-4 py-3 border-b-2 hover:bg-slate-200  cursor-pointer">
                  關於我
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
