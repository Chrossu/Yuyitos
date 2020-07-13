import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import ProviderDataForm from './providerDataForm.tsx'
import ProviderItemsForm from './providerItemsForm.tsx'

import { ReactComponent as RefreshSVG } from 'layout/svg-repo/refresh.svg'
import { fetchProviders } from 'store/actions/providers.actions'

import { AppState } from 'store/configureStore'
import { Product } from 'types/store/product'
import { SelectOption } from 'types/generals'
import { fetchProducts } from 'store/actions/products.actions'
import { Button } from 'components/buttons'

const ModifyProvider: React.FC = () => {
  const dispatch = useDispatch()
  const providers = useSelector((state: AppState) => state.providers)
  const productsData = useSelector((state: any) => state.products.products)

  const [providersForSelect, setProvidersForSelect] = React.useState<SelectOption[]>([])
  const [providerID, setProviderID] = React.useState<number | null>(null)

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
    newSelectedProductsArray[index].buy_value = e.currentTarget.value

    setSelectedProductsArray(newSelectedProductsArray)
  }

  const setSelectedProduct = (selectedProduct: Product) => {
    setSelectedProductsArray([...selectedProductsArray, selectedProduct])
    setProductsArray(() => productsArray.filter(product => product.id !== selectedProduct.id))
  }

  const handleUpdateButtonClick = async () => {
    const data = {
      products_list: selectedProductsArray.map(product => ({
        id: product.id,
        buy_value: product.buy_value
      }))
    }

    const res = await axios.put(`api/providers/${providerID}`, data)

    dispatch({
      type: 'PROVIDER_SET_ALERT',
      payload: res.data.response
    })
  }

  return (
    <>
      {/* Provider general data (name, business, address, etc. ) */}
      <ProviderDataForm
        providersForSelect={providersForSelect}
        setSelectedProductsArray={setSelectedProductsArray}
        setProviderID={setProviderID}
      />

      {/* Providers items that will provide (both tables) */}
      <ProviderItemsForm
        productsArray={productsArray}
        selectedProductsArray={selectedProductsArray}
        setSelectedProduct={setSelectedProduct}
        handlePriceChange={handlePriceChange}
      />

      <Button svg={<RefreshSVG />} color='primary' margin='2rem 0 0' width='fit-content' onClick={handleUpdateButtonClick}>
        Actualizar productos proveedor
      </Button>
    </>
  )
}

export default ModifyProvider