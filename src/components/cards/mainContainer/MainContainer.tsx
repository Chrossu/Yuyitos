import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme,
  isUser: boolean
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  background: ${(({ theme }: Props) => theme.defaultHollowBackground)};
  padding-left: ${(({ isUser }: Props) => isUser ? '275px' : '0')};
  transition: background 0.25s linear, color 0.25s linear;
`

export default MainContainer