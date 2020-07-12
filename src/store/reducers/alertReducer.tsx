import { AlertColorTypes } from "types/generals"

const INITIAL_STATE: AlertReducer = {
  showAlert: false,
  color: 'success',
  message: ''
}

export type AlertReducer = {
  showAlert: boolean
  color: AlertColorTypes
  message: string
}

type Actions =
  | {
    type: string
    payload: string
  }

const alertReducer = (state: AlertReducer = INITIAL_STATE, action: Actions): AlertReducer => {
  const matches = /(.*)_(SET_ALERT|FAILURE|UNSET_ALERT)/.exec(action.type)

  // If not a *_REQUEST | *_SUCCESS | *_FAILURE actions, we ignore them
  if (!matches)
    return state

  const [,, requestState] = matches
  
  switch (requestState) {
    case 'SET_ALERT':
    case 'FAILURE':
      return {
        ...state,
        showAlert: true,
        message: action.payload,
        color: requestState === 'SET_ALERT' ? 'success' : 'danger'
      }
    case 'UNSET_ALERT':
      return INITIAL_STATE
    default:
      return state
  }

}

export default alertReducer