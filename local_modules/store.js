import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutablejs'
import Immutable, {Iterable} from 'immutable'

const initialOpts = {
    initialState: Immutable.fromJS({}),
    mode: process.env.NODE_ENV
}

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS()
  else return state
}
// logger with convert of immutable
const loggerMiddleware = createLogger({
  stateTransformer,
  duration: true,
  collapsed: true
})

let middlewares = [thunkMiddleware]

export default function configureStore(reducers, opts = initialOpts) {
  const rootReducer = combineReducers(reducers)

  let newOpts = Object.assign(initialOpts, opts)

  if(opts.mode === 'debug') middlewares.push(loggerMiddleware)

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

  return createStoreWithMiddleware(rootReducer, newOpts.initialState)
}
