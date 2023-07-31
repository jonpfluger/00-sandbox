const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday']

// songs.forEach(song => console.log(song))

// for...of loop is for arrays or other iterable types
for (const song of songs) {
    console.log(song)
}


const ratings = {
    'Bady Guy': 7,
    'The Wheels on the Bus': 10,
    'Friday': 3,
}

// for...in loop is for objects
for (const songName in ratings) {
    const rating = ratings[songName]
    console.log(`${songName} - rating: ${rating}`)
}