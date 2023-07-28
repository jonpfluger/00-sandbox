const fs = require("fs")

// fs.appendFile('./test.txt', `${process.argv[2]}\n`, err => {
//     if (err) {
//         throw err
//     }

//     console.log('File saved!')
// })

fs.readFile("./test.txt", 'utf-8', (err, data) => {
    
    if (err) {
        throw err
    }
    
    console.log(data)

})