import * as React from 'react'

import { StyledInput } from './input.style'
import Label from 'components/texts/label/Label'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'

interface ComponentProps {
  id: string
  placeholder: string
  label?: string
}

const Input: React.FC<ComponentProps> = ({ id, label, placeholder }) => {
  return (
    <FlexContainer flexDirection='column'>
      {
        label && <Label id={id} text={label} />
      }
      <StyledInput id={id} placeholder={placeholder} />
    </FlexContainer>
  )
}

export default Input