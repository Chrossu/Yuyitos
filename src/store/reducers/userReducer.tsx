import { Client } from "types/store/clients"
import { UserActions, SET_USER, SET_STORAGE_USER, CLEAR_USER } from "store/actions/user.actions"



const userReducer = (state: Client = {} as Client, action: UserActions) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    case SET_STORAGE_USER:
      return action.payload
    case CLEAR_USER:
      return {}
    default:
      return state
  }
}

export default userReducer