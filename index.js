const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall'
const gravity = 10
const isHungry = false
const notDefined = undefined

// apiUrl = 'X'
// gravity = 0

const animals = ['monkey', 'cat', 'zebra']

// animals = [2, 3, 4] // cannot reassign

// but we can modify
// animals.push('lemur')
const lastAnimal = animals.pop()
// console.log(lastAnimal)

const dog = {
  name: 'Josh',
  age: 14,
}

// dog = {
//   name: 'test',
//   age: 1
// }

dog.name = 'test'

console.log(dog)