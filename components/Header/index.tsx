import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  flex: 0 0 56px;
  background: greenyellow;
`

const Header: FC = () => {
  return <Wrapper>This is Header</Wrapper>
}

export default Header
