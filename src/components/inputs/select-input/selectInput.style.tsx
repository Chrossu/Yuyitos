import styled from 'styled-components'
import Select from 'react-select'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  disabled: boolean
  theme: GlobalTheme
  width?: string
}

const setBackground = ({ disabled, theme }: Props) => {
  if (disabled)
    return `
      background: ${theme.inputTheme.disabledBackground};
    `
  else return `
    background: ${theme.inputTheme.background};
  `
}

export const StyledSelectInput = styled(Select)`
  font-size: 0.85rem;
  min-height: 1px;
  color: ${(({ theme }: Props) => theme.defaultText)};
  
  & > div {
    min-height: 33px;
    height: 33px;
    transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;
    border: 1px solid ${({ theme }: Props) => theme.inputBorder};
    ${setBackground}
    
    & > div {
      margin-top: -0.2rem;
    }
  }

  & .css-b8ldur-Input input {
    transition: all 0.25s linear;
  }
`