import { LoginUser } from "types/store/user"
import { Client } from "types/store/clients"
import axios from 'axios'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const SET_STORAGE_USER = 'SET_STORAGE_USER'

export type SetUser = {
  type: typeof SET_USER,
  payload: Client
}

export type SetLocalUser = {
  type: typeof SET_STORAGE_USER,
  payload: Client
}

export type ClearUser = {
  type: typeof CLEAR_USER
}

export type UserActions = | SetUser | ClearUser | SetLocalUser

export const setUser = (user: LoginUser, redirect?: () => void) => async (dispatch: any) => {
  try {
    dispatch({
      type: FETCH_USER_REQUEST
    })

    const res = await axios.post('/api/login', user)

    localStorage.setItem('user', JSON.stringify(res.data))

    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: res.data
    })

    redirect && redirect()
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response.data.error
    })
  }
}


export const setStorageUser = (user: Client) => ({
  type: SET_STORAGE_USER,
  payload: user
})

export const clearUser = () => ({
  type: CLEAR_USER
})