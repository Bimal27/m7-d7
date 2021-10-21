
import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from '../reducers'

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState ={
    favourites: [],
    company: {
        jobs: [],
        isError: false,
        isLoading: false,
      },
}




export default createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)))