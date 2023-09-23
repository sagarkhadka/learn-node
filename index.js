const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()

connectDb()
const app = express()

const port = process.env.PORT || 5100

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(port, () => {
  console.log('port')
})
