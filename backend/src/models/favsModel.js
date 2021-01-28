const { Schema, model } = require('mongoose');

const favsSchema = new Schema({
  posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }],

});

module.exports = model('favs', favsSchema);
