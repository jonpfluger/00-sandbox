const { DataTypes } = require('sequelize')
const sequelize = require('../db/connection')

// define models by using .define()
const Move = sequelize.define('Move', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = Move