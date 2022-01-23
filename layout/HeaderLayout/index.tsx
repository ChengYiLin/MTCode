import type { FC } from 'react';
import React from 'react';
import Header from '../../src/components/header';

const HeaderLayout: FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default HeaderLayout;
