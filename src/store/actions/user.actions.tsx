import { SET_USER, SET_STORAGE_USER, CLEAR_USER } from "types/user/user.actions"
import { LoginUser, User } from "types/user/User.type"
// import axios from 'axios'


export const setUser = (user: LoginUser, redirect?: () => void) => async (dispatch: any) => {
  try {
    // const data = {
    //   params: {
    //     name: user.username,
    //     password: user.password
    //   }
    // }
    // const res = await axios.get('/api/v1/login', data)
    const mockRes: User = {
      id: '1',
      name: 'Matías',
      paternal_last_name: 'Medina',
      maternal_last_name: 'Garrido',
      email: 'matiamed.14@gmail.com',
      username: 'Chross',
      user_kind: {
        id: '1',
        kind: 'admin'
      }
    }

    localStorage.setItem('user', JSON.stringify(mockRes))

    dispatch({
      type: SET_USER,
      payload: mockRes
    })

    redirect && redirect()
  } catch (error) {
    dispatch({
      type: 'SET_ERROR',
      payload: error
    })
  }
}


export const setStorageUser = (user: User) => ({
  type: SET_STORAGE_USER,
  payload: user
})

export const clearUser = () => ({
  type: CLEAR_USER
})