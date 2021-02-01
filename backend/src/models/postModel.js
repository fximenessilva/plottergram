const { Schema, model } = require('mongoose');

const postsSchema = new Schema({
  image: { type: String },
  description: { type: String },
  hashtags: [String],
  date: { type: Date, default: Date.now },
  likes: { type: Number },
  comments: [String],
});

module.exports = model('posts', postsSchema);
