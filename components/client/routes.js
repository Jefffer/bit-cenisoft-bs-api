const express = require('express')
const router = express.Router()
const { createClient, getClient, deleteClient, updateClient } = require('./actions')

// GET by ID
router.get('/:id', getClient)
// router.get('/:id', (req, res) => {
//   res.send({})
// })

// POST Create a Client
router.post('/', createClient)

// PUT Update a Client's info
router.put('/:id', updateClient)
// router.put('/:id', (req, res) => {
//   res.send({})
// })

// DELETE by ID
router.delete('/:id', deleteClient)
// router.delete('/:id', (req, res) => {
//   res.send('Client deleted successfully!')
// })

module.exports = router
