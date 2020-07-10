import Twit from 'twit'
import twitConfig from '../../config/twit'

const twit = new Twit(twitConfig)

export default class TwitAdapter implements ITwitterService {
  public async searchTweets (q: string, count: number): Promise<ITweetBody[]> {
    try {
      const { data } = await twit.get('search/tweets', { q, count })
      const tweets = data.statuses || []
      const listOfTweets : ITweetBody[] = []

      tweets.forEach(tweet => {
        const { text = '', user = {}, entities = {} } = tweet
        const { media = [], urls } = entities

        const tweetBody : ITweetBody = {
          text,
          tweetId: tweet.id_str,
          userName: user.name,
          userScreenName: `@${user.screen_name}`,
          userImage: user.profile_image_url_https,
          userDescription: user.description
        }

        if (media[0] && media[0].media_url_https) {
          tweetBody.image = media[0].media_url_https
        }

        if (urls && urls.url) {
          tweetBody.url = urls.url
        }

        listOfTweets.push(tweetBody)
      })

      return listOfTweets
    } catch (err) {
      console.log(`Error in searchTweets: ${err}`)
    }
  }

  public async getStream (track: string, language: any): Promise<any> {
    const body: IStreamBody = { track, language }
    return twit.stream('statuses/filter', body)
  }
}
