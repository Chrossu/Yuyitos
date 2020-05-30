import * as React from 'react'
import ProviderDataForm from './providerDataForm.tsx'
import ProviderItemsForm from './providerItemsForm.tsx'

import { } from './addProvider.style'

interface ComponentProps {

}

const AddProvider: React.FC<ComponentProps> = props => {
  return (
    <>
      <ProviderDataForm />
      <ProviderItemsForm />
    </>
  )
}

export default AddProvider