import type { FC } from 'react';
import React from 'react';
import Header from '../../components/header';

const HeaderLayout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <main className="pt-16">{children}</main>
        </>
    );
};

export default HeaderLayout;
