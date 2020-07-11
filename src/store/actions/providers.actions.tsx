import { Provider } from "types/store/provider"
import axios from 'axios'

export const FETCH_PROVIDERS_REQUEST = 'FETCH_PROVIDERS_REQUEST'
export const FETCH_PROVIDERS_SUCCESS = 'FETCH_PROVIDERS_SUCCESS'
export const FETCH_PROVIDERS_FAILURE = 'FETCH_PROVIDERS_FAILURE'

export type FetchProvidersAction = {
  type: string
  payload: Provider[]
}

export type ProviderActions = | FetchProvidersAction

export const fetchProviders = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_PROVIDERS_REQUEST
    })

    const res = await axios.get('/api/providers')
    dispatch({
      type: FETCH_PROVIDERS_SUCCESS,
      payload: res.data.providers_list
    })

  } catch (error) {
    dispatch({
      type: FETCH_PROVIDERS_FAILURE
    })
  }
}