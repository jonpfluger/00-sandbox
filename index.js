const animals = ['bat', 'dolphin', 'bear', 'monkey', 'bee', 'aardvark', 'jaguar']

console.log(animals.sort())

// filter
const animalsThatStartWithB = animals.filter(animal => animal[0] === 'b')
console.log(animalsThatStartWithB)

// map
const animalNameLengths = animals.map(animal => animal.length)
console.log(animalNameLengths)

const animalObjects = animals.map(animal => {
    return {
        name: animal,
        age: animal.length
    }
})
console.log(animalObjects)

const foundAnimal = animalObjects.find(animal => animal.age === 6)
console.log(foundAnimal)