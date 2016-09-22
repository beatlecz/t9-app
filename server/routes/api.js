import express from 'express'
let router = express.Router()

router.get('/', function(req, res, next) {
  res.json({status: 'OK'})
})

router.get('/words', function(req, res, next) {
  res.json({
    words: [
      'ab',
      'be',
      'cs',
      'uk'
    ]
  })
})

export default router
