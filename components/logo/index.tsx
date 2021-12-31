import type { FC } from 'react';
import Image from 'next/image';

interface ILogo {
    width: string;
    height: string;
}

const Logo: FC<ILogo> = (props) => {
    const { width, height } = props;

    return (
        <Image
            className="cursor-pointer"
            src="/Logo.svg"
            alt="Logo"
            width={width}
            height={height}
        ></Image>
    );
};

export default Logo;
