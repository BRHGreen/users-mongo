const mongoose = require('mongoose');
const Schmea = mongoose.Schema

const UserSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String
})

module.exports = mongoose.model('user', UserSchema)
