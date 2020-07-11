import { TweetParams } from '../../../../domain/usecases/tweet/add-tweet'
import { IAddTweetRepository } from '../../../protocols/add-tweet-repository'
import TweetSchema from '../schemas/tweet'

export class TweetRepository implements IAddTweetRepository {
  async add (data: TweetParams): Promise<any> {
    const { searchText, tweet } = data
    let document = await TweetSchema.findOne({ searchText })
    if (document) {
      const tweets = [...document.get('tweets') || []]
      tweets.push(tweet)
      document.set('tweets', tweets)
    } else {
      document = new TweetSchema({ searchText, tweets: [tweet] })
    }
    return await document.save()
  }
}
