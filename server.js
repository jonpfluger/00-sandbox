const { default: test } = require('node:test')
const connection = require('./config/connection')
const { Department, Item } = require('./models')

const init = async () => {

  // const allItems = await Item.find()
  // console.log(allItems)

  // let maxPrice = 0

  // for (const item of items) {
  //   if (item.price > maxPrice) {
  //     maxPrice = item.price
  //   }
  // }

  // console.log(maxPrice)

  // const result = await Item.aggregate([
  //   {
  //     $match: {
  //       quantity: { $gte: 20 }
  //     }
  //   },
  //   {
  //     $group: {
  //       _id: null,
  //       maxPrice: { $max: '$price' },
  //       allPricesTotal: { $sum : '$price' }
  //     }
  //   }
  // ])

  // console.log(result)

  await Department.deleteMany({})

  const deptData = [
    {
      name: "Bakery",
      employees: [
        { name: 'Josh' },
        { name: 'David' },
        { name: 'Max' },
      ],
    },
    {
      name: "Produce",
      employees: [
        { name: 'Nathan' },
        { name: 'Paul' },
        { name: 'Annika' },
      ],
    },
    {
      name: "Deli",
      employees: [
        { name: 'Jon' },
        { name: 'Jason' },
        { name: 'Jenny' },
      ],
    },
  ]

  const dept = await Department.insertMany(deptData)

  const allEmployees = await Department.aggregate([
    { $unwind: '$employees' },
    {
      $group: {
        _id: null,
        employees: { $push: '$employees' },
      }
    }
  ])

  console.log(JSON.stringify(allEmployees))

  // const dept = await Department.create({
  //   name: "Produce",
    // employees: [
    //   { name: 'Josh' },
    //   { name: 'David' },
    //   { name: 'Max' },
    // ],
  // })

  // console.log(`There are ${dept.getEmployeeCount()} employees in this department.`)

  // dept.alertCleanup()

}

init()