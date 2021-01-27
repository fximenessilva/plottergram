const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userData = new Schema({
  name: { type: String },
  email: { type: String },
});

module.exports = model('user', userData);
