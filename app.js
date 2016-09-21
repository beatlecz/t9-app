import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from'body-parser'

let app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

import api from './routes/api'
import index from './routes/index'

app.use('/', index)
app.use('/api', api)

// START THE SERVER
// =============================================================================

var port = process.env.PORT || 8080        // set our port
app.listen(port)
console.log('Listening on port ' + port)
