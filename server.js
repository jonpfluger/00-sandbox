const connection = require('./config/connection')
const { Department, Item } = require('./models')

// create

// Item.create({
//   name: "Raisins",
//   price: 0.01,
//   quantity: 10000,
//   expirationDate: new Date('2023-10-27')
// }).then(savedItem => console.log(savedItem))

// read

// Item.find({ name: 'Bananas' }, 'price quantity') // -expirationDate
//   .then(item => console.log(item))