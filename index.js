// Write a function that takes in an array of integers and the array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]


const removeDuplicates = arr => arr.filter((num, index) => arr.indexOf(num) === index)

console.log(removeDuplicates([1,2,2,3]))
console.log(removeDuplicates([4,5,4,4,7,5]))
console.log(removeDuplicates([1,2,3,5]))