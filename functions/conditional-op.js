const myAge = 28
//const message = myAge > 18 ? 'you can vote' : "you cannot vote"



// if(myAge > 18){
//   message = 'you can vote'
// }else{
//   message = 'you cannot vote'
// }

// console.log(message)

const showPage = () => {
  return "this is the page"
}

const errorPage = () => {
  return "this is the error page"
}

const message = myAge >= 21 ? showPage() : errorPage()

console.log(message)

const team = [ "Tyler", "John" ]

// const teamSize = () => {
//   console.log(`Team size: ${team.length}`)
// }

// const teamError = () => {
//   console.log("too many people on team")
// }

// team.length <= 4 ? teamSize() : teamError()

console.log(team.length <= 4 ? `Team size: ${team.length}` : "too many people on team")