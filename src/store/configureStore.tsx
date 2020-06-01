import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { themeReducer, userReducer, loadingReducer, providersReducer, productsReducer } from './reducers'

export const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  loading: loadingReducer,
  providers: providersReducer,
  products: productsReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
