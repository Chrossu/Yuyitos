import axios from "axios"
import { Client, ClientForm } from "types/store/clients"

export const ADD_CLIENT_REQUEST = 'ADD_CLIENT_REQUEST'
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS'
export const ADD_CLIENT_FAILURE = 'ADD_CLIENT_FAILURE'

export const UPDATE_CLIENT_REQUEST = 'UPDATE_CLIENT_REQUEST'
export const UPDATE_CLIENT_SUCCESS = 'UPDATE_CLIENT_SUCCESS'
export const UPDATE_CLIENT_FAILURE = 'UPDATE_CLIENT_FAILURE'

export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS_REQUEST'
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS'
export const FETCH_CLIENTS_FAILURE = 'FETCH_CLIENTS_FAILURE'

export const CLIENT_SET_ALERT = 'CLIENT_SET_ALERT'

export const addClient = (clientForm: ClientForm) => async (dispatch: any) => {
  try {
    dispatch({
      type: ADD_CLIENT_REQUEST
    })

    const res = await axios.post('api/clients/', clientForm)

    dispatch({
      type: ADD_CLIENT_SUCCESS,
      payload: res.data.clients_list
    })

    dispatch({
      type: CLIENT_SET_ALERT,
      payload: 'Se ha agregado exitosamente un usuario al sistema'
    })
  } catch (error) {
    dispatch({
      type: ADD_CLIENT_FAILURE
    })
  }
}

export const fetchClients = () => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_CLIENTS_REQUEST
    })

    const res = await axios.get('api/clients/')

    dispatch({
      type: FETCH_CLIENTS_SUCCESS,
      payload: res.data.clients_list
    })
  } catch (error) {
    dispatch({
      type: FETCH_CLIENTS_FAILURE
    })
  }
}

export const updateClientStatus = (clientID: number, newStatus: number, setFetchingID: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: UPDATE_CLIENT_REQUEST
    })

    const data = {
      status_id: newStatus
    }

    const res = await axios.put(`api/clients/${clientID}`, data)

    dispatch({
      type: UPDATE_CLIENT_SUCCESS,
      payload: {
        clientID,
        newStatus
      }
    })

    dispatch({
      type: 'CLIENTSTATUS_SET_ALERT',
      payload: res.data.response
    })
    
    setFetchingID(null)
  } catch (error) {
    dispatch({
      type: UPDATE_CLIENT_FAILURE
    })
  }
}
