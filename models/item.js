const { Schema } = require('mongoose')

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  // TODO: dynamic default date
  expirationDate: {
    type: Date,
    // default: Date.now,
  },
})

module.exports = itemSchema