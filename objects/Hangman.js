const Hangman = function(word, guessesLeft, guessedLetters){
  this.word = word.toLowerCase().split("")
  this.guessesLeft = guessesLeft
  this.guessedLetters = ["d"]
}

gameOne = new Hangman("dog", 3)
gameTwo = new Hangman("pizza", 4)

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
console.log(gameOne.getPuzzle())
//gameOne.getPuzzle()
//console.log(gameTwo)