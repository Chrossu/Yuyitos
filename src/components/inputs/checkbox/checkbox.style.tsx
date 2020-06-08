import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
}
export const StyledContainer = styled.div`
  padding: 0.3rem;
  width: fit-content;
  border-radius: 5px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${(({ theme }: Props) => theme.defaultHollowBackground)};
  }
`

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`

export const StyledLabel = styled.label`
  font-size: 1.05rem;
  padding-left: 0.5rem;
  cursor: pointer;
`