gameOne = new Hangman("car parts", 3)

const gameWord = document.querySelector('#game-word')
const guessesDOM = document.querySelector("#guesses-left")

gameWord.textContent = gameOne.puzzle
guessesDOM.textContent = gameOne.statusMessage



window.addEventListener('keypress', (e) => {
const guess = String.fromCharCode(e.charCode)
gameOne.makeGuess(guess)



gameWord.textContent = gameOne.puzzle
guessesDOM.textContent = gameOne.statusMessage

})


getPuzzle("2").then((puzzle) => {
  console.log(puzzle)
}, (error) => {
  console.log(`error: ${error}`)
})

const countryCode = 'US'

getCountry(countryCode).then((country) => {
  console.log(country.name)
}, (error) => {
  console.log(`ERROR: ${error}`)
})

// make http request 


// http://restcountries.eu/rest/v2/all

// const countryCode = 'US'

// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e) => {
//   if(e.target.readyState === 4 && e.target.status === 200){
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find((country) => country.alpha2Code === countryCode)
//     console.log(country.name)

//   } else if (e.target.readyState === 4 ){
//          console.log('errors!!!')
//        }
// })

// request.open('GET', 'http://restcountries.eu/rest/v2/all')
// request.send()