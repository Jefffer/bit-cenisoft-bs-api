const express = require('express')
const router = express.Router()
const { createSale, getSale, deleteSale, updateSale, getSalesByClientId } = require('./actions')

// GET by ID
router.get('/:id', getSale)

// GET by Client ID
router.get('/client/:id', getSalesByClientId)

// POST Create a Sale
router.post('/', createSale)

// PUT Update a Sale's info
router.put('/:id', updateSale)

// DELETE by ID
router.delete('/:id', deleteSale)

module.exports = router