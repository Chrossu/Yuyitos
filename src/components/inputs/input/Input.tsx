import React from 'react'

import { StyledInput } from './input.style'
import Label from 'components/texts/label/Label'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'

type ComponentProps = {
  value: string
  id?: string
  name?: string
  placeholder?: string
  label?: string
  width?: string
  disabled?: boolean
  autoComplete?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<ComponentProps> = ({ id, name, label, value, placeholder, width, disabled = false, autoComplete = 'off', onChange }) => {
  return (
    <FlexContainer flexDirection='column' width={width ? width : '100%'}>
      {label && <Label id={id} text={label} />}
      <StyledInput
        id={id}
        name={name ? name : id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </FlexContainer>
  )
}

export default Input