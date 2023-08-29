require('dotenv').config()
const sequelize = require('./db/connection')
require('./models')
const routes = require('./routes')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

// TODO: make false before deploying to heroku
sequelize.sync({ force: false }).then(async () => {
  console.log('DB synced!')
  app.listen(PORT, () => {
    console.log(`Pokemon server listening at http://localhost:${PORT}`)
  })
})