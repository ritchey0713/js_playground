const Hangman = function(word, guessesLeft, guessedLetters){
  this.word = word.toLowerCase().split("")
  this.guessesLeft = guessesLeft
  this.guessedLetters = []
  this.status = "playing"
}

// Hangman.prototype.getStatus = function(){
//   let newWord = []
//   this.word.forEach((letter) => {
//     if (this.guessedLetters.includes(letter)){
//       newWord.push(letter)
//     }
//     if (newWord.toString() === this.word.toString)
//     this.status = 'Finished'
//   })
//   if(this.guessesLeft < 1){
//     this.status = "Failed" 
//   } 
// }

Hangman.prototype.getStatus = function(){
const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

//sol 2 
  //  const lettersUnguessed = this.word.filter((letter) => {
//    return !this.guessedLetters.includes(letter)
//  })
//  const finished = lettersUnguessed.length === 0 
 
 //sol 1 
  // let finished = true 

  // this.word.forEach((letter) => {
  //   if(this.guessedLetters.includes(letter)){
  //   }else{
  //     finished = false
  //   }
  // })
  
 if(this.guessesLeft < 1){
    this.status = "Failed" 
  } else if (finished){
    this.status = "finished"
  }else {
    this.status = 'playing'
  }
  
}

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
  this.getStatus()
} 

