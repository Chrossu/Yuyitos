import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
}

export const StyledLabel = styled.label`
  margin-bottom: 0.55rem;
  font-size: 0.8rem;
  color: ${(({ theme}: Props) => theme.defaultText)};
`