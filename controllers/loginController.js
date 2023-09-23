const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400)
    throw new Error('All fields are required')
  }

  const user = await User.findOne({ email })

  // compare password
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          userName: user.userName,
          email: user.email,
          id: user.id
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1m' }
    )
    res.status(200).json({ accessToken })
  } else {
    res.status(401)
    throw new Error('Wrong credentials')
  }
})

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body
  if (!userName || !email || !password) {
    res.status(400)
    throw new Error('All fields are required')
  }

  const userAvailable = await User.findOne({ email })
  if (userAvailable) {
    res.status(400)
    throw new Error('User already registered')
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    userName,
    email,
    password: hashedPassword
  })

  if (user) {
    // *** 201 is resources created
    res.status(201).json({ _id: user.id, email: user.email })
  } else {
    res.status(400)
    throw new Error('Data not valid')
  }
})

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'current' })
})

module.exports = { loginUser, registerUser, currentUser }
