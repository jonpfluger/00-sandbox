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

  const result = await Item.aggregate([
    {
      $match: {
        quantity: { $gte: 20 }
      }
    },
    {
      $group: {
        _id: null,
        maxPrice: { $max: '$price' },
        allPricesTotal: { $sum : '$price' }
      }
    }
  ])

  // const dept = await Department.create({
  //   name: "Produce",
  //   employees: [
  //     { name: 'Josh' },
  //     { name: 'David' },
  //     { name: 'Max' },
  //   ],
  // })

  // console.log(`There are ${dept.getEmployeeCount()} employees in this department.`)

  // dept.alertCleanup()

}

init()