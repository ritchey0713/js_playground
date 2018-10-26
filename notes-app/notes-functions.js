
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
    if(notesJSON != null){
      return JSON.parse(notesJSON)
    }else{
      return []
    }
}

//remove note from list 
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => {
    return note.id === id 
  })

  if(noteIndex > -1){
    notes.splice(noteIndex, 1)
  }
}

//generate dom structure
const generateNoteDom = (note) => {
  const noteElement = document.createElement('div')
  const textElement = document.createElement("A")
  const button = document.createElement('button')
  

// wire delete button 
  button.textContent = "x"
  noteElement.appendChild(button)
  button.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

//setup note text
      if(note.title.length > 0 ){
        textElement.textContent = note.title
      }else{
        textElement.textContent = 'Unnamed note'
      }
console.log(note.id)
    textElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.appendChild(textElement)
    return noteElement
}

const renderNotes = function(notes, filters){
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
    document.querySelector('#notes').innerHTML = ""
    filteredNotes.forEach(note => {
     const noteElement =  generateNoteDom(note)
      document.querySelector('#notes').appendChild(noteElement)
    })
}

const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// generate last updated at 

const updatedTime = (timeStamp) => {
  return `Last updated: ${moment(timeStamp).fromNow()}`
}