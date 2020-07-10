import { TweetParams } from '../../../../domain/usecases/tweet/add-tweet'
import { IAddTweetRepository } from '../../../protocols/add-tweet-repository'
import TweetSchema from '../schemas/tweet'

export class TweetRepository implements IAddTweetRepository {
  async add (data: TweetParams): Promise<void> {
    const tweet = new TweetSchema(data)
    await tweet.save()
  }
}
