const notes = ["note 1", "note 2", "note 3"]

//notes.splice(1, 1, "note 0")

notes[2] = "this is a new note!!"

notes.forEach(() => {
  console.log("testing?")
})

console.log(notes.length)
console.log(notes)

for(let i = 0; i < 3; i++ ){
 console.log(i)
}

for(let i = 0; i < notes.length; i++){
  console.log(notes[i])
}