import express from 'express'
let router = express.Router()

router.get('/', function(req, res, next) {
  res.json({status: 'OK'})
})

export default router
