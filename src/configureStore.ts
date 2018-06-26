import { applyMiddleware, compose, createStore } from 'redux'
import { createLogicMiddleware } from 'redux-logic'

import axios from 'axios'
import rootReducer from './store/reducers'
import rootLogic from './store/logics'

const deps = {
  httpClient: axios
}

const logicMiddleware = createLogicMiddleware(rootLogic, deps)

const composeEnhancers = compose

const middleware = composeEnhancers(applyMiddleware(logicMiddleware))

export default function configureStore() {
  return createStore(rootReducer, {}, middleware)
}