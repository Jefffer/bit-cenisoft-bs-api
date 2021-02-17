const mongoose = require('mongoose')

// Child model
const detailSchema = new mongoose.Schema({
  bookId: {type: Schema.Types.ObjectId, ref: "books"},
  bookName: { type: String, required: true },
  unitValue: { type: Number, required: true, min: 0 },
  amount: { type: Number, required: true, min: 0 }
})

// Parent model
const saleSchema = new mongoose.Schema({
  date: { type: String, required: true },
  total: { type: String, required: true },
  clientId: {type: Schema.Types.ObjectId, ref: "clients"},
  details: [detailSchema]
})

const Sale = mongoose.model('sales', saleSchema)

module.exports = Sale
