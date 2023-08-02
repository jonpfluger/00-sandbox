// Parent class
class Pet {
    alive = true

    constructor(name, age, breed) {
        this.name = name
        this.age = age
        this.breed = breed
    }
    run() {
        console.log(`${this.name} has the zoomies!!!`)
    }
    getNumLives() {
        return 1
    }
}

Pet.prototype.nap = function() {
    console.log(`${this.name} Zzzzzzz`)
}

// Child classes (sub-classes)
class Cat extends Pet {
    constructor(name, age, breed) {
        super(name, age, breed)
    }
    getNumLives() {
        return 9
    }
}

class Dog extends Pet{
    constructor(name, age, breed) {
        super(name, age, breed)
    }
}

const mabel = new Dog('Mabel', 1, 'Old English Bulldog')
const alpha = new Dog('Alpha', 3, 'Terrior Pitbull')
const bruno = new Dog('Bruno', 1.5, 'Terrior Pitbull')
const ivy = new Cat('Ivy', 9, 'Long haired tabby')

console.log(mabel.getNumLives())
console.log(ivy.getNumLives())