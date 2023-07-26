const name = 'Jon'
const position = 'TA'

const getRandomNum = () => Math.random()

const html = `<div>
  <h2>Hello, I am ${name}</h2>
  <p>I am a ${position} in the coding bootcamp.</p>
  <p>${getRandomNum()}</p>
</div>`

console.log(html)