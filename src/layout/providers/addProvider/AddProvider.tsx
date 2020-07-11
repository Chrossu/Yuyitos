import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProviderDataForm from './providerDataForm.tsx'
import ProviderItemsForm from './providerItemsForm.tsx'

import { fetchProviders } from 'store/actions/providers.actions'

import { AppState } from 'store/configureStore'
import { Product } from 'types/store/product'
import { SelectOption } from 'types/generals'
import { fetchProducts } from 'store/actions/products.actions'

const AddProvider: React.FC = () => {
  const dispatch = useDispatch()
  const providers = useSelector((state: AppState) => state.providers)
  const productsData = useSelector((state: any) => state.products.products)

  const [providersForSelect, setProvidersForSelect] = React.useState<SelectOption[]>([])

  // Items on left table that are filtered depending on user actions
  const [productsArray, setProductsArray] = React.useState<Product[]>([])

  // Items that provider will provide on right table
  const [selectedProductsArray, setSelectedProductsArray] = React.useState<Product[]>([])

  React.useEffect(() => {
    dispatch(fetchProviders())
    dispatch(fetchProducts())
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    const providersForSelect = providers.map(provider => ({
      value: provider.id,
      label: provider.name
    }))

    setProvidersForSelect(providersForSelect)
  }, [providers])

  React.useEffect(() => {
    setProductsArray(productsData)
  }, [productsData])

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, { index }: any) => {
    let newSelectedProductsArray = [...selectedProductsArray]
    newSelectedProductsArray[index].buy_price = e.currentTarget.value

    setSelectedProductsArray(newSelectedProductsArray)
  }

  const setSelectedProduct = (selectedProduct: Product) => {
    setSelectedProductsArray([...selectedProductsArray, selectedProduct])
    setProductsArray(() => productsArray.filter(product => product.id !== selectedProduct.id))
  }

  return (
    <>
      {/* Provider general data (name, business, address, etc. ) */}
      <ProviderDataForm providersForSelect={providersForSelect} />

      {/* Providers items that will provide (both tables) */}
      <ProviderItemsForm
        productsArray={productsArray}
        selectedProductsArray={selectedProductsArray}
        setSelectedProduct={setSelectedProduct}
        handlePriceChange={handlePriceChange}
      />
    </>
  )
}

export default AddProvider