import { FC } from 'react'
import styled from 'styled-components'
import Header from '@components/Header'
import Footer from '@components/Footer'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1 1 auto;
`

const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
