const express = require('express')
const {
  loginUser,
  registerUser,
  currentUser
} = require('../controllers/loginController')
const validateToken = require('../middleware/validateTokenHandler')

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/current').get(validateToken, currentUser)

module.exports = router
