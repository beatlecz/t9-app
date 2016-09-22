import axios from 'axios'

export function fetchWords(numStr) {
  return axios.get('/api/words', {numStr})
}
