const express = require('express')
const router = express.Router()

const {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController')

// get all
router.route('/').get(getContact)

// get single
router.route('/:id').get(getSingleContact)

// create contact
router.route('/').post(createContact)

// update
router.route('/:id').put(updateContact)

// delete
router.route('/:id').delete(deleteContact)

module.exports = router
