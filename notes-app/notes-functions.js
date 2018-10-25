const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
    if(notesJSON != null){
      return JSON.parse(notesJSON)
    }else{
      return []
    }
}
//generate dom structure
const generateNoteDom = (note) => {
  const noteElement = document.createElement('div')
  const textElement = document.createElement('span')
  const button = document.createElement('button')

// wire delete button 
  button.textContent = "x"
  noteElement.appendChild(button)
  
//setup note text
      if(note.title > 0 ){
        textElement.textContent = note.title
      }else{
        textElement.textContent = 'Unnamed note'
      }

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