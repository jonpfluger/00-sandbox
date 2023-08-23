const sequelize = require('./db/connection')
require('./models')

// TODO: make false before deploying to heroku
sequelize.sync({ force: true })