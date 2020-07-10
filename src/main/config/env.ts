import dotEnvSafe from 'dotenv-safe'
dotEnvSafe.config()

export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/tweets_control',
  port: process.env.PORT || 2020,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H',
  twitConsumeKey: process.env.TWIT_CONSUME_KEY,
  twitConsumeSecret: process.env.TWIT_CONSUME_SECRET,
  twitAccessToken: process.env.TWIT_ACCESS_TOKEN,
  twitAccessTokenSecret: process.env.TWIT_ACCESS_TOKEN_SECRET,
  twitTimeoutMs: 60 * 1000
}
