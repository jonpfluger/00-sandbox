const { Schema, model } = require('mongoose')

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
  onSale: {
    type: Boolean,
    default: false,
  },
  // TODO: dynamic default date
  expirationDate: {
    type: Date,
    // default: Date.now,
  },
})

itemSchema.virtual('fullTitle')
  .get(function() {
    return `${this.name} - $${this.price} ${this.onSale ? '- SALE!' : ''}`
  })

const Item = model('Item', itemSchema)

module.exports = Item