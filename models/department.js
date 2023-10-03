const { Schema, model } = require('mongoose')
const employeeSchema = require('./schemas/employee')

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
  employees: [ employeeSchema ],
})

const Department = model('Department', departmentSchema)

module.exports = Department