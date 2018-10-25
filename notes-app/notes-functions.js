const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
    if(notesJSON != null){
      return JSON.parse(notesJSON)
    }else{
      return []
    }
}

const generateNoteDom = (note) => {
  const noteElement = document.createElement('p')

      if(note.title > 0 ){
        noteElement.textContent = note.title
      }else{
        noteElement.textContent = 'Unnamed note'
      }
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