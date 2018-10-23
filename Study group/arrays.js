const notes = [{
  title: "Vacation",
  body: "Going on a trip to Spain"
},{
  title: "Wash the Car",
  body: "Sunday will be nice, I should wash the car"
},{
  title: "Algorithms",
  body: "Focus on the structure at hand"
},{
  title: "Clean the house",
  body: "In-laws visiting soon, we should clean up!"
}]

const listNotes = notes.forEach((note, index) => {
  console.log(`${index +1 }.${note.title}: ${note.body}`)
})

listNotes


// todos.forEach((toDo, index) => {
//   console.log(`${index + 1}. ${toDo}`)
// })
