import { IAddTweetModel } from '../../protocols/add-tweet'

export type IAddTweetModel = Omit<IAddTweetModel, 'id'>

export class GetTweetsByTextUseCase {
    private readonly service: ITwitterService;

    constructor (service) {
      this.service = service
    }

    async get (q: string, count: number) : Promise<any> {
      return await this.service.searchTweets(q, count)
    }
}
