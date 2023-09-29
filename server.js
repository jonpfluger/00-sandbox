const { MongoClient } = require("mongodb")

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'animal_db'

const init = async () => {
  await client.connect()
  console.log("MongoDB connected!")

  const db = client.db(dbName)
  const animalsCollection = db.collection('animals')

  await animalsCollection.updateOne(
    { name: "Maddy" },
    { $set: { name: "Manny" } }
  )

  const animals = await animalsCollection.find().toArray()
  console.log(animals)
}

init()