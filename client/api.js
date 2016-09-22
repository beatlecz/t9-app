import axios from 'axios'

export function fetchWords(numStr) {
  return new Promise((resolve, reject) => {
    axios.get('/api/words', {numStr})
      .then(result => resolve(result.data.words))
  })
}
