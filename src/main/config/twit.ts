import env from './env'

const {
  twitConsumeKey,
  twitConsumeSecret,
  twitAccessToken,
  twitAccessTokenSecret,
  twitTimeoutMs
} = env

export default {
  consumer_key: twitConsumeKey,
  consumer_secret: twitConsumeSecret,
  access_token: twitAccessToken,
  access_token_secret: twitAccessTokenSecret,
  timeout_ms: twitTimeoutMs
}
