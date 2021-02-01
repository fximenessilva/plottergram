const { Schema, model } = require('mongoose');

const postsSchema = new Schema({
  image: { type: String },
  description: { type: String },
  hastags: [String],
  date: { type: Date, default: Date.now },
});

module.exports = model('posts', postsSchema);
