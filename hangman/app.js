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

// make http request 
const request = new XMLHttpRequest()
request.addEventListener("readystatechange", (e) => {
  if(e.target.readyState === 4){
    const data = JSON.parse(e.target.responseText)
      console.log(data)
  }
})

request.open('GET', "http://puzzle.mead.io/puzzle")
request.send()

