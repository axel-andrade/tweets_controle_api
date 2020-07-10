import { IController, IRequest, IResponse, AddTweetUseCase } from './add-tweet-protocol'
import { serverError, noContent } from '../../helpers/http'

export class AddTweetController implements IController {
  private readonly addTweetUseCase: AddTweetUseCase

  constructor (addTweetUseCase) {
    this.addTweetUseCase = addTweetUseCase
  }

  async handle (req: IRequest): Promise<IResponse> {
    try {
      await this.addTweetUseCase.add(req.body)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
