const robot = {
    name: '389-DFF',
    condition: 7,
    features: {
        canFly: false,
        canTalk: true,
        canClean: true,
    }
}

// console.log(robot.condition)
// console.log(robot.features.canFly)
// console.log(robot['name'])

// for (const key in robot) {
//     console.log(key)
//     console.log( robot[key] )
// }


// Object Destructuring
const {name, condition, ...restOfProperties} = robot
console.log(`Robot ${name} is in condition ${condition}`)
console.log(restOfProperties)


// Array Destructuring
const robotNames = ['9384-KJH', '022-FD', '38u', "DF87", "GH908", "3747JSF"]
const [firstRobot, secondRobot, ...restOfRobots] = robotNames
console.log(firstRobot, secondRobot, restOfRobots)