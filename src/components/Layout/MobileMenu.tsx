"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, MouseEvent, useState } from "react";
import { RiCloseLine, RiMenuFoldLine } from "react-icons/ri";

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
        <RiMenuFoldLine className="text-xl" />
      </div>
      <div
        className={`fixed inset-0 bg-slate-50/25 backdrop-blur-lg ${
          showMenu ? "block" : "hidden"
        }`}
      />
      <div
        className={`fixed inset-y-0 right-0 duration-300 flex justify-end ${
          showMenu ? "opacity-100 left-0" : "opacity-0 left-[100vw]"
        }`}
      >
        <div className="basis-5/6 h-full bg-slate-100 flex flex-col">
          <div className="basis-[60px] border-b-2 flex justify-end items-center">
            <div className="p-3" onClick={() => setShowMenu((prev) => !prev)}>
              <RiCloseLine className="text-xl" />
            </div>
          </div>
          <div className="grow basis-auto">
            <nav>
              <a onClick={(e) => handleNavigate(e, "/Blog")}>
                <div className="px-4 py-2">總覽</div>
              </a>
              <a onClick={(e) => handleNavigate(e, "/About")}>
                <div className="px-4 py-2">關於我</div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
