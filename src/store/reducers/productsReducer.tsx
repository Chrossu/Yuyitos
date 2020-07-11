import { ProductReducer } from "types/store/product"
import { ProductsActions, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_TYPES_SUCCESS, FETCH_BRANDS_SUCCESS, FETCH_PRODUCT_FAMILIES_SUCCESS } from "store/actions/products.actions"

const initialState = {
  products: [],
  productTypes: [],
  productFamilies: [],
  productBrands: []
}

const productsReducer = (state: ProductReducer = initialState, action: ProductsActions) => {
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
    default:
      return state
  }
}

export default productsReducer