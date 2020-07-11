import env from './config/env'
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import routes from './routes'
import databaseConnection from '../infra/db/mongo/helpers/mongoose'
import SocketAdapter from './adapters/socket/socketIO'

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

const connectIO = () => new SocketAdapter(io).connect()

http.listen(app.get('port'), function () {
  console.log('listening on port:', port)
})

// Init Database
databaseConnection()
connectIO()
