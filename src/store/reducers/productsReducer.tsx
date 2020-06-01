import { Product } from "types/product"
import { ProductsActions, FETCH_PRODUCTS_SUCCESS } from "store/actions/products.action"

const productsReducer = (state: Product[] = [], action: ProductsActions) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default productsReducer