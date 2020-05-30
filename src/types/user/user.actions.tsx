import { User } from './User.type'

export const SET_USER = 'SET_USER'
export const SET_STORAGE_USER = 'SET_STORAGE_USER'
export const CLEAR_USER = 'CLEAR_USER'

export type SetUser = {
  type: typeof SET_USER,
  payload: User
}

export type SetLocalUser = {
  type: typeof SET_STORAGE_USER,
  payload: User
}

export type ClearUser = {
  type: typeof CLEAR_USER
}

export type UserActions = | SetUser | ClearUser | SetLocalUser