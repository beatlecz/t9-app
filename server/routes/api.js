import express from 'express'
let router = express.Router()

router.get('/', function(req, res, next) {
  res.json({status: 'OK'})
})

router.get('/convert', function(req, res, next) {
  res.json({
    result: []
  })
})

export default router
