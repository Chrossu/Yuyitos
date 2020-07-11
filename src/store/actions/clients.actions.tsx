import { Client } from "types/store/clients"

export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS_REQUEST'
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS'
export const FETCH_CLIENTS_FAILURE = 'FETCH_CLIENTS_FAILURE'

export type FetchClientsAction = {
  type: string
  payload: Client[]
}

export type ClientsActions = | FetchClientsAction

export const fetchClients = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_CLIENTS_REQUEST
    })

    setTimeout(() => {
      const clientsMock: Client[] = [
        {
          id: 1,
          username: '',
          user_kind: 1,
          name: 'Matías',
          paternal_surname: 'Medina',
          maternal_surname: 'Garrido',
          email: 'matiam@gmail.com',
          phone: '942731327',
        },
        {
          id: 2,
          username: 'jxperez',
          user_kind: 1,
          name: 'Juan',
          paternal_surname: 'Perez',
          maternal_surname: 'Alalas',
          email: 'juanlala@gmail.com',
          phone: '123123',
        },
        {
          id: 3,
          username: 'lele',
          user_kind: 1,
          name: 'John',
          paternal_surname: 'Doe',
          maternal_surname: 'Lolez',
          email: 'johndoe@gmail.com',
          phone: '1133223',
        },
      ]

      dispatch({
        type: FETCH_CLIENTS_SUCCESS,
        payload: clientsMock
      })
    }, 500)

  } catch (error) {
    dispatch({
      type: FETCH_CLIENTS_FAILURE
    })
  }
}
