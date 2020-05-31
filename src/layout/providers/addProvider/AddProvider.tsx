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

  // Original items from data fetching request
  const [productsDataArray, setProductsDataArray] = React.useState<Product[]>([])

  // Items on left table that are filtered depending on user actions
  const [productsArray, setProductsArray] = React.useState<Product[]>([])

  // Items that provider will provide on right table
  const [selectedProductsArray, setSelectedProductsArray] = React.useState<Product[]>([])

  React.useEffect(() => {
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
    ]

    setProductsDataArray(mockData)
  }, [])

  const setSelectedProduct = (selectedProduct: Product) => {
    setSelectedProductsArray([...selectedProductsArray, selectedProduct])
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, rowInfo: any) => {
    const { index } = rowInfo
    let newSelectedProductsArray = [...selectedProductsArray]
    newSelectedProductsArray[index].productBuyPrice = e.currentTarget.value

    setSelectedProductsArray(newSelectedProductsArray)
  }
  
  return (
    <>
      <ProviderDataForm providerFormState={providerForm} setProviderFormState={setProviderForm} />
      <ProviderItemsForm
        productsArray={productsDataArray}
        selectedProductsArray={selectedProductsArray}
        setSelectedProduct={setSelectedProduct}
        handlePriceChange={handlePriceChange}
      />
    </>
  )
}

export default AddProvider