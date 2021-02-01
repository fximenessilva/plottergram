const { Schema, model } = require('mongoose');

const userDataSchema = new Schema({
  name: { type: String },
  email: { type: String },
  username: { type: String },
  bio: { type: String },
  profilePic: { type: String },
  posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }],
  favs: [{ type: Schema.Types.ObjectId, ref: 'favs' }],

});

module.exports = model('user', userDataSchema);
