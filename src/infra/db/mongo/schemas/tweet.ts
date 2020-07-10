import mongoose, { Schema } from 'mongoose'

const TweetSchema: Schema = new Schema({
  tweetId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  profileImage: { type: String, required: true },
  profileDescription: { type: String, required: true },
  tweetUrl: { type: String },
  date: { type: Date, required: true }
}, {
  versionKey: false,
  timestamps: true
})

export default mongoose.model('Tweet', TweetSchema)
