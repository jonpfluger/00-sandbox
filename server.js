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

//   // create

//   await Pokemon.create({
//     name: 'Pikachu',
//     type: 'electric',
//     isEvolved: false,
//   })

//   await Pokemon.create({
//     name: 'Raichu',
//     type: 'electric',
//     isEvolved: true,
//   })

//   await Pokemon.create({
//     name: 'Jigglypuff',
//     type: 'fairy',
//     isEvolved: false,
//   })

//   // update

//   await Pokemon.update({
//     name: 'Bulbasaur',
//     type: 'grass'
//   }, {
//     where: {
//       id: 2
//     },
//     raw: true,
//   })

//   // delete

//   await Pokemon.destroy({
//     where: {
//       id: 2
//     }
//   })

//   // read

//   const allPokemon = await Pokemon.findAll({
//     // where: {
//     //   type: 'electric',
//     //   isEvolved: true,
//     // },
//     raw: true,
//   })
//   console.log(allPokemon)

//   const secondPikachu = await Pokemon.findByPk(2, { raw: true })
//   console.log(secondPikachu)