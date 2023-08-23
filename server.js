const { Sequelize, DataTypes, Model } = require('sequelize')

const sequelize = new Sequelize('pokemon_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})


// define models by using .define()
const Moves = sequelize.define('Move', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

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

// TODO: make false before deploying to heroku
sequelize.sync({ force: true })