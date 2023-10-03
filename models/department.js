const { Schema, model } = require('mongoose')
const employeeSchema = require('./schemas/employee')

const departmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    employees: [ employeeSchema ],
  },
  // {
  //   methods: {
  //     getEmployeeCount() {
  //       return this.employees.length
  //     },
  //     alertCleanup() {
  //       console.log(`Cleanup in the ${this.name} department!`)
  //     }
  //   },
  // }
)

departmentSchema.methods.getEmployeeCount = function() {
  return this.employees.length
}

departmentSchema.methods.alertCleanup = function() {
  console.log(`Cleanup in the ${this.name} department!`)
}

const Department = model('Department', departmentSchema)

module.exports = Department