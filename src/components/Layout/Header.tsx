import { FC } from "react";

import Logo from "../Logo";

const Header: FC = () => {
  return (
    <header className="border-b-2">
      <div className="py-4 container mx-auto ">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
