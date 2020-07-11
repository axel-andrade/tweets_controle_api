import { IController, IRequest, IResponse, GetTweetsByTextUseCase } from './get-tweets-by-text-protocol'
import { badRequest, ok } from '../../../helpers/http'

export class GetTweetsByTextController implements IController {
    private readonly getTweetsByTextUseCase: GetTweetsByTextUseCase

    constructor (getTweetsByTextUseCase) {
      this.getTweetsByTextUseCase = getTweetsByTextUseCase
    }

    async handle (req: IRequest): Promise<IResponse> {
      try {
        const { text, count } = req.query
        const tweets = await this.getTweetsByTextUseCase.get(text, count)
        return ok(tweets)
      } catch (error) {
        return badRequest(error)
      }
    }
}
