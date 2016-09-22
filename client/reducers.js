import {createReducer} from 'redux-immutablejs'
import Immutable, {fromJS} from 'immutable'
import AT from './action-types'

const appInitState = fromJS({
  words: [],
  isFetching: false
})

export const appState = createReducer(appInitState, {

  [AT.REQUEST_WORDS]: (state, action) => state.merge({
    isFetching: true
  }),

  [AT.RECEIVE_WORDS]: (state, action) => state.merge({
    isFetching: false,
    words: action.data
  })

})

export {
  appState
}
