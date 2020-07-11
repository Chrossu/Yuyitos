import React from 'react'
import { useSelector } from 'react-redux'

import { FlexContainer, CardContainer } from 'components/cards'
import { Input, SelectInput } from 'components/inputs'

import { FETCH_PROVIDERS } from 'utils/generalConstants'
import { createLoadingSelector } from 'utils/generalFunctions'

import { AppState } from 'store/configureStore'
import { ProviderFormState } from 'types/store/provider'
import { SelectOption } from 'types/generals'

interface ComponentProps {
  providersForSelect: SelectOption[]
}

const AddProvider: React.FC<ComponentProps> = ({ providersForSelect }) => {
  const providers = useSelector((state: AppState) => state.providers)

  const [providerForm, setProviderForm] = React.useState<ProviderFormState>({
    business_type: '',
    address: '',
    phone_number: ''
  })

  const onSelectProvider = (selectedOption: any) => {
    const provider = providers.find(provider => provider.id === selectedOption.value)

    if (!provider)
      return

    setProviderForm({
      business_type: provider.business_type,
      address: provider.address,
      phone_number: provider.phone_number
    })
  }

  const { business_type, address, phone_number } = providerForm

  const loadingSelector = createLoadingSelector([FETCH_PROVIDERS])
  const isFetchingProviders = useSelector((state: AppState) => loadingSelector(state))

  return (
    <>
      <CardContainer header>
        Modificar proveedor
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
              value={business_type}
              id='business_type'
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
              value={phone_number}
              id='phone_number'
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