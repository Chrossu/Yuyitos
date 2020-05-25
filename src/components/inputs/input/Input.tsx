import React from 'react'

import { StyledInput } from './input.style'
import Label from 'components/texts/label/Label'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'

type ComponentProps = {
  id: string
  placeholder: string
  label?: string
  width?: string
  disabled?: boolean
}

const Input: React.FC<ComponentProps> = ({ id, label, placeholder, width, disabled = false }) => {
  return (
    <FlexContainer flexDirection='column' width={width ? width : '100%'}>
      {
        label && <Label id={id} text={label} />
      }
      <StyledInput id={id} placeholder={placeholder} disabled={disabled} />
    </FlexContainer>
  )
}

export default Input