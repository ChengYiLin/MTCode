import { FC } from 'react'
import HeaderLogo from './logo'
import MobileMenu from './mobileMenu'

const Header: FC = () => {
  return (
    <header className="h-14 bg-green-600">
      <div className="flex justify-between items-center	max-w-screen-xl mx-auto px-4 py-2 h-full lg:px-0">
        <HeaderLogo />
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header
