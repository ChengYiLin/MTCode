import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  padding: 30px 0;
  text-align: center;
  background: #444444;
`

const Footer: FC = () => {
  return <Wrapper>Martin Code © 2020</Wrapper>
}

export default Footer
