import React from 'react'

import { StyledContainer, StyledWarningContainer, StyledWarningText, StyledWarningSVG } from './alert.style'
import { AlertColorTypes } from 'types/generals'

interface ComponentProps {
  message: string
  color: AlertColorTypes
  margin?: string
}

const AlertComponent: React.FC<ComponentProps> = ({ message, color, margin }) => {
  return (
    <StyledContainer color={color} margin={margin}>
      <StyledWarningContainer color={color}>
        <StyledWarningSVG />
        <StyledWarningText>{message}</StyledWarningText>
      </StyledWarningContainer>
    </StyledContainer>
  )
}

export default AlertComponent