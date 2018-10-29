gameOne = new Hangman("dog", 3)

const gameWord = document.querySelector('#game-word')
const guessesDOM = document.querySelector("#guesses-left")

gameWord.textContent = gameOne.getPuzzle()
guessesDOM.textContent = gameOne.guessesLeft
console.log(gameOne.status)


window.addEventListener('keypress', (e) => {
const guess = String.fromCharCode(e.charCode)
gameOne.makeGuess(guess)



gameWord.textContent = gameOne.getPuzzle()
guessesDOM.textContent = gameOne.guessesLeft
console.log(gameOne.status)

})




