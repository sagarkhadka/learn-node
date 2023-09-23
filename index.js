const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()

connectDb()
const app = express()

const port = process.env.PORT || 5100

// *** middleware to parse res to json
app.use(express.json())

// *** api routes
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

// *** middleware to handle error
app.use(errorHandler)

app.listen(port, () => {
  console.log('port')
})
