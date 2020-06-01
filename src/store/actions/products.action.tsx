import { Provider } from "types/provider"
import { Product } from "types/product"

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export type FetchProductsAction = {
  type: string
  payload: Provider[]
}

export type ProductsActions = | FetchProductsAction

export const fetchProducts = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_PRODUCTS_REQUEST
    })

    setTimeout(() => {
      const productsMock: Product[] = [
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

      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: productsMock
      })
    }, 1500)

  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE
    })
  }
}