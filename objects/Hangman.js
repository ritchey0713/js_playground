const Hangman = function(words, guesses){
  this.words = words
  this.guesses = guesses
}

gameOne = new Hangman("Dog", 3)
gameTwo = new Hangman("Pizza", 4)

console.log(gameOne)
console.log(gameTwo)