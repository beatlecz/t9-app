import express from 'express'
let router = express.Router()

import fs from 'fs'
import path from 'path'
import TrieNode from 'local/trie-node'

router.get('/', function(req, res, next) {
  res.json({status: 'OK'})
})

router.get('/words', function(req, res, next) {
  let dic = new TrieNode()
  var fs = require('fs');

  fs.readFile('server/data/dictionary.txt', function(err, data) {
    if(err) throw err;

    var lines = data.toString().split("\n");
    lines.forEach(word => {
      word = word.split('\t')
      if (word[1] !== '' && Number(word[0]) > 0) {
        dic.insert(word[1], Number(word[0]))
      }
    })
    let words = dic.getSuggestions(req.query.numbers, 5)

    res.json({
      words
    })
  })

})

export default router
