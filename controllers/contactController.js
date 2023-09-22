const getContact = (req, res) => {
  res.status(200).json({ message: 'Contact ' })
}

const getSingleContact = (req, res) => {
  res.status(200).json({ message: `Contact for ${req.params.id}` })
}

const createContact = (req, res) => {
  console.log(req.body)
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    res.status(400)
    throw new Error('All fields are required')
  }

  res.status(200).json({ message: 'Contact Created' })
}

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact form ${req.params.id}` })
}

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` })
}

module.exports = {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
}
