import mongoose from 'mongoose'
import env from '../../../../main/config/env'
import loadSchemas from '../schemas'

const databaseUri = env.mongoUrl

export default () => {
  const connect = () => {
    mongoose.Promise = global.Promise

    mongoose.connect(
      databaseUri,
      {
        keepAlive: true,
        reconnectTries: Number.MAX_VALUE,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      err => {
        let dbStatus = ''
        if (err) {
          dbStatus = `*    Error connecting to DB: ${err}\n****************************\n`
        }
        dbStatus = '*    DB Connection: OK\n****************************\n'
        console.log(dbStatus)
      }
    )
    mongoose.set('useCreateIndex', true)
    mongoose.set('useFindAndModify', false)
  }
  connect()

  mongoose.connection.on('error', console.log)
  mongoose.connection.on('disconnected', connect)

  loadSchemas()
}
