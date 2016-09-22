import express from 'express'
let router = express.Router()
import TrieNode from 'local/trie-node'

// load dictionary
let dic = TrieNode.load('server/data/dictionary.txt')

router.get('/', function(req, res, next) {
  res.json({status: 'OK'})
})

router.get('/words', function(req, res, next) {
  let words = []
  try {
    words = dic.getSuggestions(req.query.numbers, 5)
  } catch (e) { }

  res.json({
    words
  })
})

export default router
