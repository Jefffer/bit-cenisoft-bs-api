const Sale = require('./model')

const createSale = (req, res) => {
  const newSale = new Sale(req.body)
  // Save Details list to Sale model
  req.body.datails.forEach(function(detail) {
    newSale.details.push(detail)
  });
  newSale.save((error, saleSaved) => {    
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(saleSaved)
    }
  })
}

// const deleteBook = (req, res) => {
//   Book.findByIdAndDelete(req.params.id, (error, result) => {
//     if (error) {
//       res.status(500).send(error)
//     } else {
//       res.status(204)
//     }
//   })
// }

const getSale = (req, res) => {
  Sale.findById(req.params.id, (error, sale) => {
    if (error) {
      res.status(500).send(error)
    } else if (sale) {
      res.send(sale)
    } else {
      res.status(404).send({})
    }
  })
}

// const updateBook = (req, res) => {
//   Book.updateOne({ _id: req.params.id }, req.body, (error, result) => {
//     if (error) {
//       res.status(422).send(error)
//     } else {
//       res.send(result)
//     }
//   })
// }

module.exports = { createSale, getSale }
