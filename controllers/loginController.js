const asyncHandler = require('express-async-handler')

const loginUser = asyncHandler(async (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: 'logged' })
})

module.exports = { loginUser }
