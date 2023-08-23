const sequelize = require('./db/connection')
const { Pokemon } = require('./models')

// TODO: make false before deploying to heroku
sequelize.sync({ force: true }).then(async () => {

  // create

  await Pokemon.create({
    name: 'Pikachu',
    type: 'electric',
    isEvolved: true,
  })

  await Pokemon.create({
    name: 'Raichu',
    type: 'electric',
    isEvolved: true,
  })

  await Pokemon.create({
    name: 'Jigglypuff',
    type: 'fairy',
    isEvolved: false,
  })

  // update

  await Pokemon.update({
    name: 'Bulbasaur',
    type: 'grass'
  }, {
    raw: true,
    where: {
      id: 2
    }
  })

  // delete

  await Pokemon.destroy({
    where: {
      id: 2
    }
  })

  // read

  const allPokemon = await Pokemon.findAll({
    // where: {
    //   type: 'electric',
    //   isEvolved: true,
    // },
    raw: true,
  })
  console.log(allPokemon)

  const secondPikachu = await Pokemon.findByPk(2, { raw: true })
  console.log(secondPikachu)
})