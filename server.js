const { default: test } = require('node:test')
const connection = require('./config/connection')
const { Department, Item } = require('./models')

// CREATE

Department.create({
  name: "Produce",
  employees: [
    { name: 'Josh' },
    { name: 'David' },
    { name: 'Max' },
  ]
}).then(dept => console.log(dept))