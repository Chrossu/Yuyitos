import axios from 'axios'
import { Product, Brand, ProductType } from "types/store/product"
import { AddProductFormState } from 'layout/products/addProduct/AddProduct'

export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST'
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE'

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export const FETCH_PRODUCT_TYPES_REQUEST = 'FETCH_PRODUCT_TYPES_REQUEST'
export const FETCH_PRODUCT_TYPES_SUCCESS = 'FETCH_PRODUCT_TYPES_SUCCESS'
export const FETCH_PRODUCT_TYPES_FAILURE = 'FETCH_PRODUCT_TYPES_FAILURE'

export const FETCH_PRODUCT_FAMILIES_REQUEST = 'FETCH_PRODUCT_FAMILIES_REQUEST'
export const FETCH_PRODUCT_FAMILIES_SUCCESS = 'FETCH_PRODUCT_FAMILIES_SUCCESS'
export const FETCH_PRODUCT_FAMILIES_FAILURE = 'FETCH_PRODUCT_FAMILIES_FAILURE'

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

export const addProduct = (product: AddProductFormState) => async (dispatch: any) => {
  try {
    dispatch({
      type: ADD_PRODUCT_REQUEST
    })

    const res = await axios.post('api/products', product)

    dispatch({
      type: 'PRODUCT_SET_ALERT',
      payload: res.data.response
    })

  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error.response?.data?.error || 'Errorr'
    })
  }
}

export const fetchProducts = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_PRODUCTS_REQUEST
    })

    const res = await axios.get('api/products')

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: res.data.products_list
    })

  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE
    })
  }
}

export const fetchProductFamilies = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_PRODUCT_FAMILIES_REQUEST
    })

    const res = await axios.get('api/product/families')

    dispatch({
      type: FETCH_PRODUCT_FAMILIES_SUCCESS,
      payload: res.data.families_list
    })

  } catch (error) {
    dispatch({
      type: FETCH_PRODUCT_FAMILIES_FAILURE
    })
  }
}

export const fetchProductTypes = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_PRODUCT_TYPES_REQUEST
    })

    const res = await axios.get('api/product/types')

    dispatch({
      type: FETCH_PRODUCT_TYPES_SUCCESS,
      payload: res.data.types_list
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

    const res = await axios.get('api/product/brands')

    dispatch({
      type: FETCH_BRANDS_SUCCESS,
      payload: res.data.brands_list
    })

  } catch (error) {
    dispatch({
      type: FETCH_BRANDS_FAILURE
    })
  }
}