import React from 'react'

import CardContainer from 'components/cards/cardContainer/CardContainer'
import Input from 'components/inputs/input/Input'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'

import { ProviderFormState } from 'types/provider'
import { SelectInput } from 'components/inputs'

interface ComponentProps {
  providerFormState: ProviderFormState
  setProviderFormState: React.Dispatch<React.SetStateAction<ProviderFormState>>
}

const AddProvider: React.FC<ComponentProps> = ({ providerFormState, setProviderFormState }) => {
  const { providerName, business, address, phoneNumber } = providerFormState

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setProviderFormState({
      ...providerFormState,
      [name]: value
    })
  }

  const mockOptions = [
    {
      value: '1',
      label: 'John Doe'
    }
  ]

  return (
    <>
      <CardContainer header>
        Añadir nuevo proveedor
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='25%'>
            <SelectInput
              options={mockOptions}
              label='Proveedor'
              width='80%'
              placeholder='Seleccione proveedor'
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={business}
              id='business'
              label='Rubro'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={address}
              id='address'
              label='Dirección'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={phoneNumber}
              id='phoneNumber'
              label='Fono contacto'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
        </FlexContainer>
      </CardContainer>
    </>
  )
}

export default AddProvider