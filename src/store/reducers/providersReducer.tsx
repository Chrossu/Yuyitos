import { Provider } from "types/provider"
import { ProviderActions, FETCH_PROVIDERS_SUCCESS } from "store/actions/providers.actions"

const providersReducer = (state: Provider[] = [], action: ProviderActions) => {
  switch (action.type) {
    case FETCH_PROVIDERS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default providersReducer