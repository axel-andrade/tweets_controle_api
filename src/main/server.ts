import env from './config/env'
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import routes from './routes'
import databaseConnection from '../infra/db/mongo/helpers/mongoose'

import TwitterServiceAdapter from '../main/adapters/twitter-service'

// const initMongo = require('./config/mongo')
// const WSAdapter = require('./app/adapters/ws')(http)

const port = env.port
express.json()

const app = express()
app.set('port', port)
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(express.static('public'))
app.use(routes)

const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', async socket => {
  console.log('Running socket: ', socket.id)
  const { hashtag, text, language } = socket.handshake.query
  const track = hashtag ? `#${hashtag}` : text
  if (track) {
    const stream = await TwitterServiceAdapter.getStream(track, language)
    stream.on('tweet', tweet => {
      io.emit('tweet', tweet)
    })
  }
})

// WSAdapter.connect()

http.listen(app.get('port'), function () {
  console.log('listening on port:', port)
})

// Init Database
databaseConnection()

export default app
