const mongoose = require('mongoose')

// Child model
const detailSchema = new mongoose.Schema({
  bookId: {type: mongoose.Schema.Types.ObjectId, ref: "books"},
  bookName: { type: String},
  unitValue: { type: Number, min: 0 },
  amount: { type: Number, min: 0 }
})

// Parent model
const saleSchema = new mongoose.Schema({
  date: { type: String, required: true },
  total: { type: Number, min: 0 },
  clientId: {type: mongoose.Schema.Types.ObjectId, ref: "clients"},
  details: [detailSchema]
})

const Sale = mongoose.model('sales', saleSchema)

module.exports = Sale
