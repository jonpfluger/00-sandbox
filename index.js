const newRobots = ['new-74yr', 'new-93-ri', 'new-RE9343']
const usedRobots = ['used-8u3df', 'used-3rjd', 'used-88f4j']

// const allRobots = newRobots.concat(usedRobots)

// spread operator
const allRobots = [...newRobots, ...usedRobots]

for (const robot of allRobots) {
    console.log(`${robot}-sold`)
}


// Spread with Objects

const robot = { name: 'new-74yr', condition: 7 }
const features = { canClean: true, canFly: true, canTalk: false }

const robotWithFeatures = {...robot, ...features}

console.log(robotWithFeatures)