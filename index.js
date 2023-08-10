const have = [
    [1, 2],
    [
      [3, 4],
      [5, 6]
    ]
]

// const want = [
//     [1, 2],
//     [3, 4], 
//     [5, 6]
// ]

// have[2] = have[1][1]
// have[1] = have[1][0]

// console.log(have)

const isArrayOfNums = item => item.length > 0 && typeof item[0] === 'number' 

const flattenArrayOfArrays = arr => arr.reduce((newArr, childArr) => {
  isArrayOfNums(childArr)
    ? newArr.push(childArr)
    : childArr.forEach(grandChildArray => newArr.push(grandChildArray))
  return newArr
}, [])

const want = flattenArrayOfArrays(have)
console.log(want)