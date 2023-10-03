const connection = require('./config/connection')
const { Department, Item } = require('./models')

const item = new Item({
  name: "Bananas",
  price: 0.67,
  quantity: 100,
  expirationDate: new Date('2023-10-20')
})

console.log(item)