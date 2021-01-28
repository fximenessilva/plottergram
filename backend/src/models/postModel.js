const { Schema, model } = require('mongoose');

const postsSchema = new Schema({
  image: { type: String },
  description: { type: String },
  hastags: [String],
});

module.exports = model('posts', postsSchema);
