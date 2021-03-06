const gameWord = document.querySelector('#game-word')
const guessesDOM = document.querySelector("#guesses-left")
let gameOne

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  gameOne.makeGuess(guess)
  render()
})

const render = () => {
  gameWord.innerHTML = ''
  guessesDOM.textContent = gameOne.statusMessage

 // const noteElement = document.createElement('div')
 const letters = gameOne.puzzle.split("")
  letters.forEach((letter) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    gameWord.appendChild(letterEl)
  })

}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  gameOne = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


// getPuzzle("2").then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(err)
// })



// getLocation().then((location) => {
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(country)
// }).catch((err) => {
//   console.log(err)
// })

// getCurrentCountry().then((country) => {
//   console.log(country)
// }).catch((err) => {
//   console.log(err)
// })


// getPuzzle("2").then((puzzle) => {
//   console.log(puzzle)
// }, (error) => {
//   console.log(`error: ${error}`)
// })

// const countryCode = 'US'

// getCountry(countryCode).then((country) => {
//   console.log(country.name)
// }, (error) => {
//   console.log(`ERROR: ${error}`)
// })

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

// fetch('http://puzzle.mead.io/puzzle', {}).then((resp) => {
//   if(resp.status === 200){
//     return resp.json()
//   }else{
//      throw new Error("unable to fetch")
//   }
// }).then((data) => {
//   console.log(data.puzzle)
// }).catch((err)=> {
//   console.log(err)
// })


// http://ipinfo.io/json?token=010974ce661a1a

