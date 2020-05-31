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
  
  // Original items from data fetching request
  const [productsArray, setProductsArray] = React.useState<Product[]>([])


  const [selectedProductsArray, setSelectedProductsArray] = React.useState<Product[]>([])

  React.useEffect(() => {
    const mockData: Product[] = [
      {
        id: '1',
        price: '200',
        productName: 'Pan',
        stockQuantity: '20',
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
        price: '900',
        productName: 'Leche Nestlé',
        stockQuantity: '38',
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
        price: '1400',
        productName: 'Mantequilla Colún 200g',
        stockQuantity: '9',
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
        price: '1200',
        productName: 'Bebida desechable 1.5 lts. Sprite',
        stockQuantity: '12',
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
        price: '900',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
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
        price: '900',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
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
        price: '900',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
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
        price: '900',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
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
        price: '900',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
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
        price: '900',
        productName: 'Saco de papas 1kg',
        stockQuantity: '18',
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

  return (
    <>
      <ProviderDataForm providerFormState={providerForm} setProviderFormState={setProviderForm} />
      <ProviderItemsForm productsArray={productsDataArray} />
    </>
  )
}

export default AddProvider