const notes = [{
  title: "Vacation",
  body: "I wanna go to Texas"
},{
  title: "Diet",
  body: "Dont eat so much fast food"
},{
  title: "Algorithms",
  body: "Practice more!"
},{
  title: "Land a Dev Job!",
  body: "Network more and more!!!"
}]

//notes.splice(1, 1, "note 0")

// notes[2] = "this is a new note!!"

// notes.forEach(() => {
//   console.log("testing?")
// })

// console.log(notes.length)
// console.log(notes)

// for(let i = 0; i < 3; i++ ){
//   console.log(i)
// }

// for(let i = 0; i < notes.length; i++){
//   console.log(notes[i])
// }

const findNote = (notes, noteTitle) => {
  const noteIndex = notes.findIndex((note, index) => {
      return note.title === noteTitle
  })

}


// const noteIndex = notes.findIndex((note, index) => {
//   console.log(note)
//   return note.title === "Vacation"
// })

// console.log(noteIndex)