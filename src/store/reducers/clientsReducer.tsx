import { Client } from "types/store/clients"
import { ClientsActions, FETCH_CLIENTS_SUCCESS } from "store/actions/clients.actions"

const initialState: Client[] = []

const ClientsReducer = (state: Client[] = initialState, action: ClientsActions) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default ClientsReducer