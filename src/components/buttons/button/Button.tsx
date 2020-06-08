import React from 'react'
import { withTheme } from 'styled-components'

import { StyledButton } from './button.style'
import { ColorTypes } from 'types/generals'
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
  marginRight?: string
  marginLeft?: string
  marginBottom?: string
  noWrap?: boolean
  padding?: string
  hollow?: boolean
  fontSize?: string
  svg?: JSX.Element
}

const Button: React.FC<ButtonProps> = ({ onClick, style, disabled, svg, children, ...props }) => {
  return (
    <>
      <StyledButton
        color='primary'
        margin='auto 0 0 0'
        onClick={onClick}
        style={style}
        disabled={disabled}
        {...props}
      >
        {svg}
        {children}
      </StyledButton>
    </>
  )
}

export default withTheme(Button)