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
}

const AddProvider: React.FC<ComponentProps> = ({ providersForSelect }) => {
  const providers = useSelector((state: AppState) => state.providers)

  const [providerForm, setProviderForm] = React.useState<ProviderFormState>({
    businessType: '',
    address: '',
    phoneNumber: ''
  })

  const onSelectProvider = (selectedOption: any) => {
    console.log(selectedOption)
    const provider = providers.find(provider => provider.id === selectedOption.value)

    if (!provider)
      return

    setProviderForm({
      businessType: provider.business.businessType,
      address: provider.address,
      phoneNumber: provider.phoneNumber
    })
  }

  const { businessType, address, phoneNumber } = providerForm

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
            <SelectInput
              options={providersForSelect}
              isLoading={isFetchingProviders}
              label='Proveedor'
              width='80%'
              placeholder='Seleccione proveedor'
              onChange={onSelectProvider}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={businessType}
              id='businessType'
              label='Rubro'
              width='80%'
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={address}
              id='address'
              label='Dirección'
              width='80%'
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={phoneNumber}
              id='phoneNumber'
              label='Fono contacto'
              width='80%'
            />
          </FlexContainer>
        </FlexContainer>
      </CardContainer>
    </>
  )
}

export default AddProvider