import React from 'react'
import { useSelector } from 'react-redux'

import { FlexContainer, CardContainer } from 'components/cards'
import { Input, SelectInput } from 'components/inputs'

import { FETCH_PROVIDERS } from 'utils/generalConstants'
import { createLoadingSelector } from 'utils/generalFunctions'

import { AppState } from 'store/configureStore'
import { ProviderFormState } from 'types/provider'
import { SelectOption } from 'types/generals'

interface ComponentProps {
  providersForSelect: SelectOption[]
  providerFormState: ProviderFormState
  setProviderFormState: React.Dispatch<React.SetStateAction<ProviderFormState>>
}

const AddProvider: React.FC<ComponentProps> = ({ providersForSelect, providerFormState, setProviderFormState }) => {
  const { businessType, address, phoneNumber } = providerFormState

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setProviderFormState({
      ...providerFormState,
      [name]: value
    })
  }

  const loadingSelector = createLoadingSelector([FETCH_PROVIDERS])
  const isFetchingProviders = useSelector((state: AppState) => loadingSelector(state))

  return (
    <>
      <CardContainer header>
        Añadir nuevo proveedor
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='25%'>
            {
              isFetchingProviders ? 'Cargando...'
              :
              <SelectInput
                options={providersForSelect}
                label='Proveedor'
                width='80%'
                placeholder='Seleccione proveedor'
              />
            }
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={businessType}
              id='businessType'
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