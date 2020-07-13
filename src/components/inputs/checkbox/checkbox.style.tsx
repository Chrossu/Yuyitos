import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
}
export const StyledContainer = styled.div`
  padding: 0.3rem;
  width: fit-content;
  border-radius: 5px;
  transition: background 0.25s ease-in;

  &:hover {
    background: ${(({ theme }: Props) => theme.defaultHollowBackground)};
  }
`

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  -ms-transform: scale(1.25); /* IE */
  -moz-transform: scale(1.25); /* FF */
  -webkit-transform: scale(1.25); /* Safari and Chrome */
  -o-transform: scale(1.25); /* Opera */
  transform: scale(1.25);
  padding: 10px;
`

export const StyledLabel = styled.label`
  font-size: 1.05rem;
  padding-left: 0.5rem;
  cursor: pointer;
`