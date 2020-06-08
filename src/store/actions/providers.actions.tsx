import { Provider } from "types/store/provider"

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

    setTimeout(() => {
      const providerMock: Provider[] = [
        {
          id: '1',
          providerName: 'John Doe',
          rut: '19.812.717-2',
          business: {
            businessID: '1',
            businessType: 'Panadero'
          },
          address: 'Los Heroes #099, Providencia',
          phoneNumber: '981742218'
        },
        {
          id: '2',
          providerName: 'Emily Rose',
          rut: '18.612.511-6',
          business: {
            businessID: '2',
            businessType: 'Abarrotes'
          },
          address: 'Mianserina #2125, La Dehesa',
          phoneNumber: '97728127'
        },
        {
          id: '3',
          providerName: 'John Wayne',
          rut: '15.776.112-k',
          business: {
            businessID: '3',
            businessType: 'Amasandería'
          },
          address: 'Polivalente #0221, Independencia',
          phoneNumber: '963518866'
        },
      ]

      dispatch({
        type: FETCH_PROVIDERS_SUCCESS,
        payload: providerMock
      })
    }, 500)

  } catch (error) {
    dispatch({
      type: FETCH_PROVIDERS_FAILURE
    })
  }
}