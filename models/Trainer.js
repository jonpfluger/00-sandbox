const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/connection')

// define models by extending model class
class Trainer extends Model {}

Trainer.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  numBadges: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  // dateAdded: {
  //   type: DataTypes.DATE,
  //   defaultValue: DataTypes.NOW,
  // },
}, {
  sequelize,
  modelName: 'Trainer',
  timestamps: true,
})

module.exports = Trainer