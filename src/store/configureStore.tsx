import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import themeReducer from './reducers/themeReducer'
import userReducer from './reducers/userReducer'

export const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
