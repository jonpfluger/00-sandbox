const Trainer = require('./Trainer')
const Move = require('./Move')
const Pokemon = require('./Pokemon')
const TrainerLicense = require('./License')

// one-to-one relationship
Trainer.hasOne(TrainerLicense, {
  foreignKey: 'trainerId',
})

TrainerLicense.belongsTo(Trainer, {
  as: 'license',
  foreignKey: 'trainerId',
})

// one-to-many relationship
Trainer.hasMany(Pokemon, {
  foreignKey: 'trainerId',
})

Pokemon.belongsTo(Trainer, {
  foreignKey: 'trainerId',
})

// many-to-many relationship

module.exports = {
  Trainer,
  Move,
  Pokemon,
  TrainerLicense
}