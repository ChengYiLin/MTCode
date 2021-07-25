import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.aside`
  flex: 0 0 20%;
  background: blue;
`

const Aside: FC = () => {
  return <Wrapper>This is Aside</Wrapper>
}

export default Aside
