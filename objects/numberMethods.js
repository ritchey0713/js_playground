let num = 100.693

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// range 1 -5 return true if guess is right 

let makeGuess = (guess) => {
  let min = 1
  let max = 5
  let answer = Math.floor(Math.random() * (max - min + 1)) + min
  return answer === guess
}

console.log(makeGuess(3))