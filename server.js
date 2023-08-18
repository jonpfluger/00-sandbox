const connection = require('./db/connection')
const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`Pokemon API listening at http://localhost:${PORT}`))