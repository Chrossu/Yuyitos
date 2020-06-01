import { User } from "types/store/user"
import { UserActions, SET_USER, SET_STORAGE_USER, CLEAR_USER } from "store/actions/user.actions"

const mainState: User = {
  id: '',
  name: '',
  paternal_last_name: '',
  maternal_last_name: '',
  email: '',
  username: '',
  user_kind: {}
}

const userReducer = (state: User = mainState, action: UserActions) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    case SET_STORAGE_USER:
      return action.payload
    case CLEAR_USER:
      return mainState
    default:
      return state
  }
}

export default userReducer