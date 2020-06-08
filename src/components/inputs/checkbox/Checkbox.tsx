import React from 'react'

import { StyledContainer, StyledCheckbox, StyledLabel } from './checkbox.style'

interface ComponentProps {
  isChecked: boolean
  label: string
  onClick: any
}

const Checkbox: React.FC<ComponentProps> = ({ isChecked, label, onClick }) => {
  return (
    <StyledContainer onClick={onClick}>
      <StyledCheckbox checked={isChecked} />
      <StyledLabel>{label}</StyledLabel>
    </StyledContainer>
  )
}

export default Checkbox