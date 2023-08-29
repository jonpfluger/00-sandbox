const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db/connection')

class TrainerLicense extends Model {}

TrainerLicense.init({
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trainerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Trainers',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'TrainerLicense',
})

module.exports = TrainerLicense