import { Product, Brand, ProductType } from "types/product"

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export const FETCH_PRODUCT_TYPES_REQUEST = 'FETCH_PRODUCT_TYPES_REQUEST'
export const FETCH_PRODUCT_TYPES_SUCCESS = 'FETCH_PRODUCT_TYPES_SUCCESS'
export const FETCH_PRODUCT_TYPES_FAILURE = 'FETCH_PRODUCT_TYPES_FAILURE'

export const FETCH_BRANDS_REQUEST = 'FETCH_BRANDS_REQUEST'
export const FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS'
export const FETCH_BRANDS_FAILURE = 'FETCH_BRANDS_FAILURE'

export type FetchProductsAction = {
  type: string
  payload: Product[]
}

export type FetchProductTypesAction = {
  type: string
  payload: ProductType[]
}

export type FetchBrandsAction = {
  type: string
  payload: Brand[]
}

export type ProductsActions = | FetchProductsAction | FetchProductTypesAction | FetchBrandsAction

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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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
            id: '1',
            productTypeName: 'Abarrote'
          },
          brand: {
            id: '0',
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

export const fetchProductTypes = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_PRODUCT_TYPES_REQUEST
    })

    const productTypesMock: ProductType[] = [
      {
        id: '1',
        productTypeName: 'Lácteos'
      },
      {
        id: '2',
        productTypeName: 'Bebidas gaseosas'
      },
      {
        id: '3',
        productTypeName: 'Verduras'
      },
      {
        id: '4',
        productTypeName: 'Snacks'
      }
    ]

    dispatch({
      type: FETCH_PRODUCT_TYPES_SUCCESS,
      payload: productTypesMock
    })

  } catch (error) {
    dispatch({
      type: FETCH_PRODUCT_TYPES_FAILURE
    })
  }
}

export const fetchBrands = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_BRANDS_REQUEST
    })

    const brandsMock: Brand[] = [
      {
        id: '1',
        brandName: 'Colún'
      },
      {
        id: '2',
        brandName: 'Nesté'
      },
      {
        id: '3',
        brandName: 'Soprole'
      },
      {
        id: '4',
        brandName: 'Marinela'
      }
    ]

    dispatch({
      type: FETCH_BRANDS_SUCCESS,
      payload: brandsMock
    })

  } catch (error) {
    dispatch({
      type: FETCH_BRANDS_FAILURE
    })
  }
}