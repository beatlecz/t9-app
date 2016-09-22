import {action} from '../modules/base-actions'
import * as Api from './api'
import AT from './action-types'

export function fetchWords(numStr) {

  return dispatch => {
    dispatch(action(AT.REQUEST_WORDS))

    Api.fetchWords(numStr)
      .then(data => dispatch(action(AT.RECEIVE_WORDS, {data})))
  }

}
