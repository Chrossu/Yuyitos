import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { themeReducer, userReducer, loadingReducer, providersReducer, productsReducer, clientsReducer, alertReducer } from './reducers'

export const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  loading: loadingReducer,
  providers: providersReducer,
  products: productsReducer,
  clients: clientsReducer,
  alert: alertReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
