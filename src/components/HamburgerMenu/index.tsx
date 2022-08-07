import { FC, useState } from "react";
import styled from "./hamburgerMenu.module.css";

interface Props {
    isOpen: boolean;
    handleToggle: () => void;
}

const HamburgerMenu: FC<Props> = ({ isOpen, handleToggle }) => {
    return (
        <div
            className={`mx-2 cursor-pointer ${isOpen ? styled.active : ""}`}
            onClick={handleToggle}
        >
            <div className={styled.line} />
            <div className={styled.line} />
            <div className={styled.line} />
        </div>
    );
};

export default HamburgerMenu;
