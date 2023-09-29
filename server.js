const { MongoClient } = require("mongodb")

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'animal_db'

const init = async () => {
  await client.connect()
  console.log("MongoDB connected!")

  const db = client.db(dbName)
  const animalsCollection = db.collection('animals')

  await animalsCollection.insertMany([
    {
      type: "Monkey",
      name: "Maddy",
      age: 56,
    },
    {
      type: "cat",
      name: "Jables",
      age: 11,
    },
    {
      type: "Dog",
      name: "Ben",
      age: 3,
    },
  ])

  const animals = await animalsCollection.find().toArray()
  console.log(animals)
}

init()