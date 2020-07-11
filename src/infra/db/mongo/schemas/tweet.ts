import mongoose, { Schema } from 'mongoose'

const TweetSchema: Schema = new Schema({
  tweets: { type: [Object], required: true },
  searchText: { type: String, required: true }
}, {
  versionKey: false,
  timestamps: true
})

export default mongoose.model('Tweet', TweetSchema)
