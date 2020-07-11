import { IController, IRequest, IResponse, AddTweetUseCase } from './add-tweet-protocol'
import { badRequest, ok } from '../../../helpers/http'

export class AddTweetController implements IController {
  private readonly addTweetUseCase: AddTweetUseCase

  constructor (addTweetUseCase) {
    this.addTweetUseCase = addTweetUseCase
  }

  async handle (req: IRequest): Promise<IResponse> {
    try {
      const tweet = await this.addTweetUseCase.add(req.body)
      return ok(tweet)
    } catch (error) {
      return badRequest(error)
    }
  }
}
