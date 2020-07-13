import { ProductReducer, Product, ProductFamilies, ProductType, Brand } from "types/store/product"
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_TYPES_SUCCESS, FETCH_BRANDS_SUCCESS, FETCH_PRODUCT_FAMILIES_SUCCESS, ADD_PRODUCT_SUCCESS } from "store/actions/products.actions"

const initialState = {
  products: [],
  productTypes: [],
  productFamilies: [],
  productBrands: []
}

type ProductsActions = 
| {
  type: typeof FETCH_PRODUCTS_SUCCESS,
  payload: Product[]
}
| {
  type: typeof FETCH_PRODUCT_FAMILIES_SUCCESS,
  payload: ProductFamilies[]
}
| {
  type: typeof FETCH_PRODUCT_TYPES_SUCCESS,
  payload: ProductType[]
}
| {
  type: typeof FETCH_BRANDS_SUCCESS,
  payload: Brand[]
}
| {
  type: typeof ADD_PRODUCT_SUCCESS,
  payload: Product
}

const productsReducer = (state: ProductReducer = initialState, action: ProductsActions): ProductReducer => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      }
    case FETCH_PRODUCT_FAMILIES_SUCCESS:
      return {
        ...state,
        productFamilies: action.payload
      }
    case FETCH_PRODUCT_TYPES_SUCCESS:
      return {
        ...state,
        productTypes: action.payload
      }
    case FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        productBrands: action.payload
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          ...action.payload
        }
      }
    default:
      return state
  }
}

export default productsReducer