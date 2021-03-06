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
  title: "land a Dev Job!",
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
  return notes.find((note, index) => {
      return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function(notes, query){
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase()) 
    return isTitleMatch || isBodyMatch 
  })
}



//  console.log(findNotes(notes, "eat"))



// const findNote = (notes, noteTitle) => {
//   const noteIndex = notes.findIndex((note, index) => {
//       return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[noteIndex]
// }
// const foundNote = findNote(notes, "vacation")
// console.log(foundNote)

// const noteIndex = notes.findIndex((note, index) => {
//   console.log(note)
//   return note.title === "Vacation"
// })

// console.log(noteIndex)

const sortNotes = (notes) => {
  notes.sort((a, b) =>{
    if(a.title.toLowerCase() < b.title.toLowerCase()){
      return -1
    }else if(a.title.toLowerCase() > b.title.toLowerCase()){
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notes)

console.log(notes)
