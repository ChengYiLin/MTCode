import { FC } from 'react'

export const MainContaier: FC = ({ children }) => {
  return <div className="flex max-w-screen-xl mx-auto">{children}</div>
}

export const Main: FC = ({ children }) => {
  return <div className="w-3/4 bg-yellow-800">{children}</div>
}

export const Aside: FC = ({ children }) => {
  return <div className="w-1/4 ml-10 bg-red-400">{children}</div>
}
