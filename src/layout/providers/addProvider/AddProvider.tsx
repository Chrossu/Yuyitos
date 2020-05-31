import * as React from 'react'
import ProviderDataForm from './providerDataForm.tsx'
import ProviderItemsForm from './providerItemsForm.tsx'
import { ProviderFormState } from 'types/provider'
import { Product } from 'types/product'



interface ComponentProps {

}

const AddProvider: React.FC<ComponentProps> = props => {
  const [providerForm, setProviderForm] = React.useState<ProviderFormState>({
    providerName: '',
    address: '',
    business: '',
    phoneNumber: '',
    rut: ''
  })

  const [productsArray, setProductsArray] = React.useState<Product[]>([])

  return (
    <>
      <ProviderDataForm providerFormState={providerForm} setProviderFormState={setProviderForm} />
      <ProviderItemsForm productsArray={productsArray} />
    </>
  )
}

export default AddProvider