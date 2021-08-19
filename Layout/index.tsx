import { FC } from 'react'
import Header from 'Layout/Header'
import Footer from 'Layout/Footer'

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-auto	bg-gray-100">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

export * from 'Layout/Main'
