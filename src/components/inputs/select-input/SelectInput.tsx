import React from 'react'
import { OptionsType } from 'react-select'

import { StyledSelectInput } from './selectInput.style'

import { SelectOption } from 'types/generals'
import { FlexContainer } from 'components/cards'
import { Label } from 'components/texts'
import { Spinner } from 'components/utilities-components'

interface ComponentProps {
  options: OptionsType<SelectOption>
  placeholder?: string
  id?: string
  label?: string
  width?: string
  isLoading?: boolean
  margin?: string
  onChange: (optin: any) => void
}

const SelectInput: React.FC<ComponentProps> = ({ options, placeholder, id, label, width, isLoading, margin, onChange }) => {
  const handleChange = (selectedOption: any) => onChange(selectedOption)

  return (
    <FlexContainer flexDirection='column' width={width ? width : '100%'} margin={margin}>
      {
        label && <Label id={id} text={label} />
      }
      {
        isLoading ? <Spinner />
          :
          <StyledSelectInput id={id} options={options} placeholder={placeholder} onChange={handleChange} />

      }
    </FlexContainer>
  )
}

export default SelectInput