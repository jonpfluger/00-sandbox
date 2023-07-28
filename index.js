const {add, subtract, multiply, divide, isEqual} = require('./mathLibrary')

const operator = process.argv[2]
const num1 = parseInt(process.argv[3])
const num2 = parseInt(process.argv[4])

if (!operator || parseInt(operator)) {
    throw "Operator must be a string"
}

let result = null

if (operator === 'add') {
  result = add(num1, num2)
} else if (operator === 'subtract') {
  result = subtract(num1, num2)
} else if (operator === 'multiply') {
  result = multiply(num1, num2)
} else if (operator === 'divide') {
  result = divide(num1, num2)
}

console.log(result)