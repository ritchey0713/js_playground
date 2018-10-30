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




