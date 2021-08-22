import { FC } from 'react'

export const MainContaier: FC = ({ children }) => {
  return (
    <div className="flex flex-wrap max-w-screen-xl mx-auto">{children}</div>
  )
}

export const Main: FC = ({ children }) => {
  return <div className="w-full md:w-3/4 bg-yellow-800">{children}</div>
}

export const Aside: FC = ({ children }) => {
  return <div className="w-full md:w-1/4 md:pl-4 bg-red-400">{children}</div>
}
