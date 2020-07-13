import axios from 'axios'
import { Product } from 'types/store/product'

export const ADD_SELL_REQUEST = 'ADD_SELL_REQUEST'
export const ADD_SELL_SUCCESS = 'ADD_SELL_SUCCESS'
export const ADD_SELL_FAILURE = 'ADD_SELL_FAILURE'

export const FETCH_SELLS_REQUEST = 'FETCH_SELLS_REQUEST'
export const FETCH_SELLS_SUCCESS = 'FETCH_SELLS_SUCCESS'
export const FETCH_SELLS_FAILURE = 'FETCH_SELLS_FAILURE'

const SELL_SET_ALERT = 'SELL_SET_ALERT'

export const addSell = (total_value: number, products_data: Product[], client_id?: number | null) => async (dispatch: any) => {
    try {
        dispatch({
            type: ADD_SELL_REQUEST
        })

        const products_list = products_data.map(product => ({
            id: product.id,
            stock_to_sell: product.stock_to_sell
        }))

        const data: any = {
            total_value,
            products_list
        }

        if (!!client_id)
            data.client_id = client_id

        const res = await axios.post('api/sells/', data)

        dispatch({
            type: ADD_SELL_SUCCESS
        })

        dispatch({
            type: SELL_SET_ALERT,
            payload: res.data.response
        })
    } catch (error) {
        dispatch({
            type: ADD_SELL_FAILURE,
            payload: error.response.data.error
        })
    }
}

export const fetchSells = () => async (dispatch: any) => {
    try {
        dispatch({
            type: FETCH_SELLS_REQUEST
        })

        const res = await axios.get('api/sells/')

        dispatch({
            type: FETCH_SELLS_SUCCESS,
            payload: res.data.sells_list
        })

    } catch (error) {
        dispatch({
            type: FETCH_SELLS_FAILURE
        })
    }
}
