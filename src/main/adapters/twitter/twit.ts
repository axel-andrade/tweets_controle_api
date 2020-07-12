import Twit from 'twit'
import twitConfig from '../../config/twit'

const twit = new Twit(twitConfig)

export default class TwitAdapter implements ITwitterService {
  public async searchTweets (q: string, count: number): Promise<any> {
    try {
      const { data } = await twit.get('search/tweets', { q, count })
      const tweets = data.statuses || []
      const listOfTweets = []
      tweets.forEach(tweet => listOfTweets.push(tweet))
      return listOfTweets
    } catch (err) {
      console.log(`Error in searchTweets: ${err}`)
      return []
    }
  }

  public async getStream (track: string, language: any): Promise<any> {
    const body: IStreamBody = { track, language }
    return twit.stream('statuses/filter', body)
  }
}
