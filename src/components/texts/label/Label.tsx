import React from 'react'

import { StyledLabel } from './label.style'

interface ComponentProps {
  text: string
  id?: string
}

const Label: React.FC<ComponentProps> = ({ id, text }) => {
  return (
    <StyledLabel htmlFor={id}>
      {text}
    </StyledLabel>
  )
}

export default Label