const { default: test } = require('node:test')
const connection = require('./config/connection')
const { Department, Item } = require('./models')

const init = async () => {
  const dept = await Department.create({
    name: "Produce",
    employees: [
      { name: 'Josh' },
      { name: 'David' },
      { name: 'Max' },
    ],
  })

  console.log(`There are ${dept.getEmployeeCount()} employees in this department.`)

}

init()