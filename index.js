// ES5 Constructor Function (blueprint that creates objects)
function Dog(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
}

Dog.prototype.nap = function() {
    console.log(`${this.name} Zzzzzzzz`)
}

// instantiation
const mabel = new Dog('Mabel', 1, 'Old English Bulldog')
const alpha = new Dog('Alpha', 3, 'Terrior Pitbull')
const bruno = new Dog('Bruno', 1.5, 'Terrior Pitbull')

mabel.nap()
alpha.nap()
bruno.nap()