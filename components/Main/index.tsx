import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  flex: 0 0 75%;
  background: brown;
`

const Main: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Main
