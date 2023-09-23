const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'Please enter the user name']
    },
    email: {
      type: String,
      required: [true, 'Please enter the user email'],
      unique: [true, 'Email already taken']
    },
    password: {
      type: String,
      required: [true, 'Please enter the password']
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('user', userSchema)
