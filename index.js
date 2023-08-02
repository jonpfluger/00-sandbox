// ES5 Constructor Function (blueprint that creates objects)
// function Dog(name, age, breed) {
//     this.name = name
//     this.age = age
//     this.breed = breed
// }

// ES6 Class Declaration
class Dog {
    alive = true
    somethingElse = 1
    constructor(name, age, breed) {
        this.name = name
        this.age = age
        this.breed = breed
    }
    run() {
        console.log(`${this.name} has the zoomies!!!`)
    }
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

mabel.run()