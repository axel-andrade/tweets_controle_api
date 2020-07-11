import { ITweetModel } from '../../protocols/add-tweet'

export type TweetParams = Omit<ITweetModel, 'id'>

export class AddTweetUseCase {
    private readonly repository: any;

    constructor (repository) {
      this.repository = repository
    }

    async add (data: TweetParams) : Promise<any> {
      return await this.repository.add(data)
    }
}
