const Sale = require('./model')
const Book = require('../book/model')

const createSale = (req, res) => {
  const newSale = new Sale(req.body)
  newSale.details = []
  var newTotal = 0

  // Get Book data to save it into Sale.Detail model.
  // With this code we only need the bookId and the amount in the Details request like this:
    // {
    //   "date": "02/02/2021",
    //   "total": 2000,
    //   "clientId": "602d75079c0dc52358003260",
    //   "details": [
    //       {
    //           "bookId": "602d92f6bf4a4a53dc60b9fd",
    //           "amount": 2
    //       },
    //       {
    //           "bookId": "602dbdbb81605050c4fd257b",
    //           "amount": 1
    //       }
    //   ]
    // } 
  // The bookName and unitValue is setted automatically.
  req.body.details.forEach(function(detail) {
    Book.findById(detail.bookId, (error, book) => {
      if (book){
        detail.bookName = book.name
        detail.unitValue = book.unitValue
        newSale.details.push(detail)
        // Update total value
        newTotal = newTotal + (book.unitValue * detail.amount)
      }
    })
  });

  newSale.total



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
