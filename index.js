// ES5
// function makeGreeting(message, name) {
//     return message + ", " + name + "!"
// }

// var greeting1 = makeGreeting("Hello", "Jon")
// var greeting2 = makeGreeting("Hi", "Josh")

// console.log(greeting1, greeting2)


// ES6

var makeGreeting = (message, name) => `${message}, ${name}!`

var greeting1 = makeGreeting("Hello", "Josh")
var greeting2 = makeGreeting("Hi", "Jon")

console.log(greeting1, greeting2)