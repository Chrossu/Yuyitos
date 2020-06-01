import React from 'react'
import { OptionsType } from 'react-select'

import { StyledSelectInput } from './selectInput.style'

import { ReactSelectOptions } from 'types/generals'
import { FlexContainer } from 'components/cards'
import { Label } from 'components/texts'

interface ComponentProps {
  options: OptionsType<ReactSelectOptions>
  placeholder?: string
  id?: string
  label?: string
  width?: string
}

const SelectInput: React.FC<ComponentProps> = ({ options, placeholder, id, label, width }) => {
  return (
    <FlexContainer flexDirection='column' width={width ? width : '100%'}>
      {
        label && <Label id={id} text={label} />
      }
      <StyledSelectInput id={id} options={options} placeholder={placeholder} />
    </FlexContainer>
  )
}

export default SelectInput