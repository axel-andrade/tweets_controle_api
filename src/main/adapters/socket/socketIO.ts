import TwitterServiceAdapter from '../twitter'
import { sleep } from '../../../utils/helpers'

export default class SocketAdapter {
  private io : any;

  constructor (io) {
    this.io = io
  }

  public async connect (): Promise<void> {
    this.io.on('connection', async socket => {
      console.log('Running socket: ', socket.id)
      const { hashtag, text, language } = socket.handshake.query
      const track = hashtag ? `#${hashtag}` : text
      if (track) {
        const stream = await TwitterServiceAdapter.getStream(track, language)
        stream.on('tweet', async tweet => {
          // await sleep(10000)
          this.io.emit('tweet', tweet)
        })
      }
    })
  }

  public async formatTweet (tweet: Object) : Promise<void> {
    console.log(tweet)
  }
}
