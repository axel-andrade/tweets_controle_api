import { MissingParamError } from '../../../presentation/errors'
import { ITweetModel } from '../../models/tweet'

export { ITweetModel } from '../../models/tweet'
export type TweetParams = Omit<ITweetModel, 'id'>

export class AddTweetUseCase {
    private readonly repository: any;

    constructor (repository) {
      this.repository = repository
    }

    async add (data: TweetParams) : Promise<void> {
      await this.repository.add(data)
    }
}
