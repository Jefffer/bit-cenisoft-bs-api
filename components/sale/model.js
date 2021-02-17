const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
  date: { type: String, required: true },
  total: { type: String, required: true },
  clientId: {type: Schema.Types.ObjectId, ref: "clients"}
  
})

const Sale = mongoose.model('sales', saleSchema)

module.exports = Sale
