import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProviderDataForm from './providerDataForm.tsx'
import ProviderItemsForm from './providerItemsForm.tsx'

import { fetchProviders } from 'store/actions/providers.actions'

import { AppState } from 'store/configureStore'
import { Product } from 'types/product'
import { SelectOption } from 'types/generals'
import { ProviderFormState } from 'types/provider'

const AddProvider: React.FC = () => {
  const dispatch = useDispatch()
  const providers = useSelector((state: AppState) => state.providers)

  const [providerForm, setProviderForm] = React.useState<ProviderFormState>({
    providerName: '',
    businessType: '',
    address: '',
    phoneNumber: ''
  }
  )

  const [providersForSelect, setProvidersForSelect] = React.useState<SelectOption[]>([])

  React.useEffect(() => {
    dispatch(fetchProviders())
    getProducts()
  }, [])

  React.useEffect(() => {
    const providersForSelect = providers.map(provider => ({
      value: provider.id,
      label: provider.providerName
    }))

    setProvidersForSelect(providersForSelect)
  }, [providers])

  const getProducts = async () => {
    // const res = await axios.get('')

    const mockData: Product[] = [
      {
        id: '1',
        productName: 'Pan',
        stockQuantity: '20',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '2',
        productName: 'Leche Nestlé',
        stockQuantity: '38',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '3',
        productName: 'Mantequilla Colún 200g',
        stockQuantity: '9',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '4',
        productName: 'Bebida desechable 1.5 lts. Sprite',
        stockQuantity: '12',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '5',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '6',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '7',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '8',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '9',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
      {
        id: '10',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
        productBuyPrice: '',
        productSellPrice: '900',
        productType: {
          idType: '1',
          productTypeName: 'Abarrote'
        },
        brand: {
          idBrand: '0',
          brandName: ''
        }
      },
    ]

    setProductsDataArray(mockData)
    setProductsArray(mockData)
  }
  // Original items from data fetching request
  const [productsDataArray, setProductsDataArray] = React.useState<Product[]>([])

  // Items on left table that are filtered depending on user actions
  const [productsArray, setProductsArray] = React.useState<Product[]>([])

  // Items that provider will provide on right table
  const [selectedProductsArray, setSelectedProductsArray] = React.useState<Product[]>([])

  const setSelectedProduct = (selectedProduct: Product) => {
    setSelectedProductsArray([...selectedProductsArray, selectedProduct])
    setProductsArray(() => productsArray.filter(product => product.id !== selectedProduct.id))
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, { index }: any) => {
    let newSelectedProductsArray = [...selectedProductsArray]
    newSelectedProductsArray[index].productBuyPrice = e.currentTarget.value

    setSelectedProductsArray(newSelectedProductsArray)
  }

  return (
    <>
      <ProviderDataForm
        providersForSelect={providersForSelect}
        providerFormState={providerForm}
        setProviderFormState={setProviderForm}
      />
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