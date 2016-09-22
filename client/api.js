import axios from 'axios'

export function fetchWords(numbers) {
  return new Promise((resolve, reject) => {
    axios.get('/api/words', {params: {numbers}})
      .then(result => resolve(result.data.words))
  })
}
