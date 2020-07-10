import env from './config/env'
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'

import TwitterServiceAdpater from '../main/adapters/twitter-service'
import { tsParseMaybeAssignWithJSX } from 'sucrase/dist/parser/plugins/typescript'

// const initMongo = require('./config/mongo')
// const WSAdapter = require('./app/adapters/ws')(http)

const port = env.port
const app = express()

app.set('port', port)
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(express.static('public'))
// app.use(require('./app/routes'))

const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', async socket => {
  console.log('Running socket: ', socket.id)
  const { hashtag, text, language } = socket.handshake.query
  const track = hashtag ? `#${hashtag}` : text
  if (track) {
    const stream = await TwitterServiceAdpater.getStream(track, language)
    stream.on('tweet', tweet => {
      io.emit('tweet', tweet)
    })
  }
})

app.get('/', async (req: any, res: any) => {
  const tweets = await TwitterServiceAdpater.searchTweets('#test', 100)
  res.send(JSON.stringify(tweets))
})

app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))

// WSAdapter.connect()

http.listen(app.get('port'), function () {
  console.log('listening on port:', port)
})

// Init MongoDB
// initMongo()
