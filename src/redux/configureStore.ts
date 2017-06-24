import { createStore, applyMiddleware, Store } from 'redux'
import { StoreShape } from '../types'
import thunk from 'redux-thunk'
import rootReducer, { initialState } from './reducers'

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)
 
export default store
