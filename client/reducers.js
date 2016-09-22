import {createReducer} from 'redux-immutablejs'
import Immutable, {fromJS} from 'immutable'
import AT from './action-types'

const appInitState = fromJS({
  numbers: [],
  words: [],
  isFetching: false
})

export const app = createReducer(appInitState, {

  [AT.ADD_NUMBER]: (state, action) => {
    return state.merge({
      numbers: state.get('numbers').push(action.number)
    })
  },

  [AT.CLEAR_NUMBERS]: (state, action) => state.merge({
    numbers: fromJS([]),
    words: fromJS([])
  }),

  [AT.REQUEST_WORDS]: (state, action) => state.merge({
    isFetching: true
  }),

  [AT.RECEIVE_WORDS]: (state, action) => state.merge({
    isFetching: false,
    words: action.data
  })

})

export {
  app
}
