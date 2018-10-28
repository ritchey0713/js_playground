const Hangman = function(word, guessesLeft, guessedLetters){
  this.word = word.toLowerCase().split("")
  this.guessesLeft = guessesLeft
  this.guessedLetters = []
}



// Hangman.prototype.getPuzzle = function (){
//   let puzzle = ""
//   this.word.forEach(letter => {
//     if(this.guessedLetters.includes(letter)){
//       puzzle += letter
//     }else{
//       puzzle += "*"
//     }
//   })

//     return puzzle
// }

Hangman.prototype.getPuzzle = function (){
    let puzzle = ""
    this.word.forEach(letter => {
      if(this.guessedLetters.includes(letter)){
        puzzle += letter
      }else{
        puzzle += "*"
      }
    })
  
      return puzzle
  }

//  Hangman.prototype.makeGuess = (game, char, guesses) => {
//   if (game.word.includes(char)){
//     game.word += char
//   }else {
//     game.word += "*"
//     guesses -= 1
//   }
//   `${guesses}`
// }


Hangman.prototype.makeGuess = function(guess){
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if(isUnique){
    this.guessedLetters.push(guess)
  } 
  if(isUnique && isBadGuess){
    this.guessesLeft--
  }

  
} 


gameOne = new Hangman("dog", 3)

console.log(gameOne.getPuzzle())
console.log(gameOne.guessesLeft)


window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  gameOne.makeGuess(guess)

console.log(gameOne.getPuzzle())
console.log(gameOne.guessesLeft)
})