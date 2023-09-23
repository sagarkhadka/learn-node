const express = require('express')
const {
  loginUser,
  registerUser,
  currentUser
} = require('../controllers/loginController')

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/current').get(currentUser)

module.exports = router
