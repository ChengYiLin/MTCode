import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'

const HeaderLogo: FC = () => {
  return (
    <Link href="/" passHref>
      <Image
        className="cursor-pointer"
        src={logo}
        alt="Logo"
        width={164}
        height={40}
      />
    </Link>
  )
}

export default HeaderLogo
