"use client";

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
      <div className="p-3" onClick={() => setShowMenu((prev) => !prev)}>
        <RiMenuFoldLine className="text-xl cursor-pointer" />
      </div>
      <div
        className={`fixed inset-0 bg-slate-50/25 backdrop-blur-lg flex justify-end ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="basis-1/6" onClick={() => setShowMenu(false)} />
        <div
          className={`basis-5/6 h-full bg-slate-100 dark:bg-slate-800 flex flex-col transition-transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="basis-[60px] border-b-2 flex justify-between items-center">
            <div className="px-3">
              <DarkModeSwitch />
            </div>
            <div className="p-3" onClick={() => setShowMenu(false)}>
              <RiCloseLine className="text-xl cursor-pointer" />
            </div>
          </div>
          <div className="grow basis-auto">
            <nav>
              <a onClick={(e) => handleNavigate(e, "/Blog")}>
                <div className="p-4 border-b-2 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">
                  總覽
                </div>
              </a>
              <a onClick={(e) => handleNavigate(e, "/About")}>
                <div className="p-4 border-b-2 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">
                  關於我
                </div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
