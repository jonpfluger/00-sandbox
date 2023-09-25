// Higher Order Function - a function that takes a function as an argument

const numbers = [1, 2, 3, 4]

function customForEach(arr, cb) {
  for (const item of arr) {
    cb(item)
  }
}

// customForEach(numbers, number => console.log(number))


function customMap(arr, cb) {
  const resultArr = []
  for (const item of arr) {
    const result = cb(item)
    resultArr.push(result)
  }
  return resultArr
}

const doubled = customMap(numbers, item => item * 2)
console.log(doubled)