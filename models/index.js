const Trainer = require('./Trainer')
const Move = require('./Move')
const Pokemon = require('./Pokemon')
const TrainerLicense = require('./License')

// one-to-one relationship
Trainer.hasOne(TrainerLicense, {
  foreignKey: 'trainerId',
})

TrainerLicense.belongsTo(Trainer, {
  foreignKey: 'trainerId'
})

module.exports = {
  Trainer,
  Move,
  Pokemon,
  TrainerLicense
}