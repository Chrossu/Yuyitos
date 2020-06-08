import { LoginUser } from "types/store/user"
import { Client } from "types/store/clients"
// import axios from 'axios'

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
    // const data = {
    //   params: {
    //     name: user.username,
    //     password: user.password
    //   }
    // }
    // const res = await axios.get('/api/v1/login', data)
    dispatch({
      type: FETCH_USER_REQUEST
    })

    const mockRes: Client = {
      id: '1',
      name: 'Matías',
      paternalLastName: 'Medina',
      maternalLastName: 'Garrido',
      email: 'matiamed.14@gmail.com',
      username: 'admin',
      phone: '945736666',
      user_kind: 0
    }

    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify(mockRes))

      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: mockRes
      })
      redirect && redirect()
    }, 500)

  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error
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