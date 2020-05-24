import * as React from 'react'

import { StyledButton } from './button.style'

type ComponentProps = {
  onClick?: any
  style?: {}
  disabled?: boolean
}

const Button: React.FC<ComponentProps> = ({ onClick, style, disabled, children }) => {
  return (
    <StyledButton onClick={onClick} style={style} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

export default Button