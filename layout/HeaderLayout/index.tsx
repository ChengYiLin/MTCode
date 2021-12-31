import type { FC } from 'react';
import Header from '../../components/header';

const HeaderLayout: FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default HeaderLayout;
