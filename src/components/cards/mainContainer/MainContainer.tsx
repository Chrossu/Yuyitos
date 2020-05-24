import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
}

export const MainContainer = styled.div`
  padding: 2rem 0;
  height: 100vh;
  width: 100vw;
  background: ${(({ theme}: Props) => theme.defaultHollowBackground)};
  padding-left: 275px;
  transition: all 0.25s linear;
`