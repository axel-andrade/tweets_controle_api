import { IAddTweetModel } from '../../protocols/add-tweet'

export class AddTweetUseCase {
    private readonly repository: any;

    constructor (repository) {
      this.repository = repository
    }

    async add (data: IAddTweetModel) : Promise<any> {
      return await this.repository.add(data)
    }
}
