const router = require('express').Router()

const movesRoutes = require('./moves')
const trainersRoutes = require('./trainers')
const pokemonRoutes = require('./pokemon')

router.use('/api/pokemon', pokemonRoutes)
router.use('/api/trainers', trainersRoutes)
router.use('/api/moves', movesRoutes)

module.exports = router