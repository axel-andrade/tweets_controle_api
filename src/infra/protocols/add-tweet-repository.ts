import { IAddTweetModel } from '../../domain/usecases/tweet/add-tweet'

export interface IAddTweetRepository {
    add: (data: IAddTweetModel) => Promise<void>
}
