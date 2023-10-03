const connection = require('./config/connection')
const { Department, Item } = require('./models')

// CREATE

// Item.create({
//   name: "Raisins",
//   price: 0.01,
//   quantity: 10000,
//   expirationDate: new Date('2023-10-27')
// }).then(savedItem => console.log(savedItem))

// READ

// Item.find({ name: 'Bananas' }, 'price quantity') // -expirationDate
//   .then(item => console.log(item))

// UPDATE

// Item.updateMany({ name: 'Raisins' }, { price: 0.2 })
//   .then(updatedItem => console.log(updatedItem))

Item.findByIdAndUpdate('651b5d9de5f7b79aae323474', {
  name: "Beef",
  price: 5,
  quantity: 100,
}, {
  new: true,
}).then(updatedItem => console.log(updatedItem))