import { TweetParams } from '../../domain/usecases/tweet/add-tweet'

export interface IAddTweetRepository {
    add: (data: TweetParams) => Promise<void>
}
