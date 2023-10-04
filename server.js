require('./config/connection')
const { Department, Item } = require('./models')

const seedDepartments = async () => {
  await Department.deleteMany({})

  const deptData = [
    {
      name: "Bakery",
      employees: [
        { name: 'Josh' },
        { name: 'David' },
        { name: 'Max' }
      ]
    },
    {
      name: "Produce",
      employees: [
        { name: 'Liz' },
        { name: 'Paul' },
        { name: 'Adam' }
      ]
    },
    {
      name: "Deli",
      employees: [
        { name: 'Nathan' },
        { name: 'Annika' },
        { name: 'Tor' }
      ]
    }
  ]

  await Department.insertMany(deptData)
}


const seedItems = async () => {
  await Item.deleteMany({})

  const itemData = [
    {
      name: 'Bananas',
      price: 0.50,
      quantity: 100,
      onSale: false,
    }, 
    {
      name: 'Raisins',
      price: 0.02,
      quantity: 10000,
      onSale: true,
    }, 
    {
      name: 'Donuts',
      price: 0.75,
      quantity: 50,
      onSale: false,
    }, 
    {
      name: 'Ham',
      price: 4,
      quantity: 60,
      onSale: true,
    }, 
  ]

  await Item.insertMany(itemData)
}

const init = async () => {
  await seedDepartments()
  await seedItems()

  const item = await Item.findOne({ onSale: true })
  console.log(item.fullTitle)

}

init()