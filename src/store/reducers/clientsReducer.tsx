import { Client } from "types/store/clients"
import { FETCH_CLIENTS_SUCCESS, UPDATE_CLIENT_SUCCESS } from "store/actions/clients.actions"

const initialState: Client[] = []

type ClientsActions =
  | {
    type: typeof FETCH_CLIENTS_SUCCESS,
    payload: Client[]
  }
  | {
    type: typeof UPDATE_CLIENT_SUCCESS,
    payload: {
      clientID: number
      newStatus: number
    }
  }

const ClientsReducer = (state: Client[] = initialState, action: ClientsActions) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return action.payload
    case UPDATE_CLIENT_SUCCESS:
      return state.map(client => client.id === action.payload.clientID ? { ...client, status_id: action.payload.newStatus } : client)
    default:
      return state
  }
}

export default ClientsReducer