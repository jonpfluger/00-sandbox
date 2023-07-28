const operator = process.argv[2]
const num1 = parseInt(process.argv[3])
const num2 = parseInt(process.argv[4])

let result = null

if (operator === 'add') {
  result = num1 + num2
} else if (operator === 'subtract') {
  result = num1 - num2
} else if (operator === 'multiply') {
  result = num1 * num2
} else if (operator === 'divide') {
  result = num1 / num2
}

console.log(result)