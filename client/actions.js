import {action} from 'local/base-actions'
import * as Api from './api'
import AT from './action-types'

export function addNumber(number) {
  return (dispatch, getState) => {
    dispatch(action(AT.ADD_NUMBER, {number}))

    let {numbers} = getState().get('app').toJS()

    dispatch(fetchWords(numbers.join('')))

  }
}

export function clearNumbers() {
  return action(AT.CLEAR_NUMBERS)
}

export function fetchWords(numStr) {

  return dispatch => {
    dispatch(action(AT.REQUEST_WORDS))

    Api.fetchWords(numStr)
      .then(data => dispatch(action(AT.RECEIVE_WORDS, {data})))
  }

}
