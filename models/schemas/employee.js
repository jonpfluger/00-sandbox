const { Schema } = require('mongoose')

const employeeSchema = new Schema({
  name: String,
})

module.exports = employeeSchema