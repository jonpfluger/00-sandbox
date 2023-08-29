const router = require('express').Router()
const { Trainer, TrainerLicense, Pokemon } = require('../models')

router.get('/', async (req, res) => {
  const trainers = await Trainer.findAll({
    include: [
      { model: TrainerLicense },
      { model: Pokemon },
    ]
  })
  res.json(trainers)
})

module.exports = router