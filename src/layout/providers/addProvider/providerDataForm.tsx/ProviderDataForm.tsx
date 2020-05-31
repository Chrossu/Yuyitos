import React from 'react'

import CardContainer from 'components/cards/cardContainer/CardContainer'
import Input from 'components/inputs/input/Input'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'

import { ProviderFormState } from 'types/provider'

interface ComponentProps {
  providerFormState: ProviderFormState
  setProviderFormState: React.Dispatch<React.SetStateAction<ProviderFormState>>
}

const AddProvider: React.FC<ComponentProps> = ({ providerFormState, setProviderFormState }) => {

  const { providerName, address, rut, phoneNumber } = providerFormState

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setProviderFormState({
      ...providerFormState,
      [name]: value
    })
  }

  return (
    <>
      <CardContainer header>
        Añadir nuevo proveedor
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={providerName}
              id='providerName'
              label='Nombre proveedor'
              placeholder='Ingresa nombre proveedor'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={rut}
              id='rut'
              label='Rut'
              placeholder='Ingresa rut de proveedor'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={address}
              id='address'
              label='Dirección'
              placeholder='Ingresa dirección'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={phoneNumber}
              id='phoneNumber'
              label='Fono de contacto'
              placeholder='Ingresa fono'
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