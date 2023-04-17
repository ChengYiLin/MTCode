import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const PageTitle: FC<IProps> = ({ children }) => {
  return (
    <h1 className="mb-5 text-3xl font-bold leading-tight sm:mb-10 sm:text-5xl sm:leading-snug">
      {children}
    </h1>
  );
};

export default PageTitle;
