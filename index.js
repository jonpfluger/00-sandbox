// Rest operator (...)

const add = (...numbers) => {
    // console.log(numbers)
    let sum = 0
    numbers.forEach(num => sum+= num)
    return sum
}

const result1 = add(1, 11, 10, 12)
const result2 = add(20, 20, 20)
const result3 = add(2, 2, 2, 2, 2, 2)

console.log(result1, result2, result3)