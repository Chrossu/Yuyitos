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
    `
  else return `
    background: ${theme.inputTheme.background};
    border: 1px solid ${theme.inputTheme.border};
  `
}

export const StyledInput = styled.input`
  padding: 0.5rem 0.25rem;
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  transition: all 0.25s linear;
  font-size: 0.8rem;
  color: ${(({ theme }: Props) => theme.defaultText)};
  width: 100%;
  border-radius: 2px;
  outline: none;
  ${setBackgroundAndBorder}
`