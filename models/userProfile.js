const mongoose = require('mongoose');
const Schmea = mongoose.Schema

const UserProfileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    occupation: String,
    bio: String
})

module.exports = mongoose.model('userProfile', UserProfileSchema)
