const router = require('express').Router()
const { Trainer } = require('../models')

router.get('/', async (req, res) => {
  const trainers = await Trainer.findAll()
  res.json(trainers)
})

module.exports = router