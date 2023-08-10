const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000
const pets = require('./data/pets.json')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

app.get('/api/all-pets', (req, res) => {
  res.json(pets)
})

app.get('/api/search-pets', (req, res) => {
  const searchedName = req.query.name
  const results = pets.filter(pet => pet.name === searchedName)
  res.json(results)
})

app.listen(PORT, () => {
  console.log(`Express listening on http://localhost:${PORT}`)
})