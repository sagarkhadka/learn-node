const express = require('express')
const { loginUser } = require('../controllers/loginController')

const router = express.Router()

router.route('/register').post(loginUser)
router.route('/login').post(loginUser)

module.exports = router
