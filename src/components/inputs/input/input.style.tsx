import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  disabled: boolean
  theme: GlobalTheme
  width?: string
}

const setBackgroundAndBorder = ({ disabled, theme }: Props) => {
  if (disabled)
    return `
      background: ${theme.inputTheme.disabledBackground};
      border: 1px solid ${theme.inputTheme.disabledBorder};
      cursor: not-allowed;
    `
  else return `
    background: ${theme.inputTheme.background};
    border: 1px solid ${theme.inputTheme.border};
  `
}

export const StyledInput = styled.input`
  padding: 0.5rem 0.25rem;
  transition: all 0.25s linear;
  font-size: 0.8rem;
  color: ${(({ theme }: Props) => theme.defaultText)};
  width: 100%;
  border-radius: 2px;
  outline: none;
  ${setBackgroundAndBorder}
`