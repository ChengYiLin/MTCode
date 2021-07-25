import { FC } from 'react'
import styled from 'styled-components'
import Header from '@components/Header'
import Main from '@components/Main'
import Aside from '@components/Aside'
import Footer from '@components/Footer'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainWrapper = styled.div`
  flex: 1 1 auto;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;
`

const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainWrapper>
        <MainContainer>
          <Main>{children}</Main>
          <Aside />
        </MainContainer>
      </MainWrapper>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
