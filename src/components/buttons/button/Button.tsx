import * as React from 'react'
import { withTheme } from 'styled-components'

import { StyledButton } from './button.style'
import { ColorTypes } from 'types/colorTypes'
import { GlobalTheme } from 'utils/global.theme'

export type ButtonProps = {
  theme: GlobalTheme
  color: ColorTypes
  onClick?: any
  style?: {}
  disabled?: boolean
  customHeight?: string
  margin?: string
  width?: string
  marginLeft?: string
  marginBottom?: string
  noWrap?: boolean
  hollow?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <StyledButton
        color='primary'
        margin='auto 0 0 0'
        onClick={props.onClick}
        style={props.style}
        disabled={props.disabled}
        {...props}
      >
        {props.children}
      </StyledButton>
    </>
  )
}

export default withTheme(Button)