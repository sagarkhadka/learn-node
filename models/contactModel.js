const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the name']
    },
    email: {
      type: String,
      required: [true, 'Please enter the email']
    },
    phone: {
      type: String,
      required: [true, 'Please enter the Phone']
    }
  },
  { timeStamt: true }
)

module.exports = mongoose.model('Contact', contactSchema)
