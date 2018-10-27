const editDate = moment().valueOf()
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const updateElement = document.querySelector('#updated-at')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => {
  return note.id === noteId
})

if(note === undefined){
  location.assign('/index.html')
}

titleElement.value = note.title 
bodyElement.value = note.body 
updateElement.textContent = updatedTime(note.updatedAt)


titleElement.addEventListener('input', (e) => {
  note.title = e.target.value
  note.updatedAt = editDate
  saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value
  note.updatedAt = editDate
  saveNotes(notes)
})

removeButton.addEventListener('click', () => {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if(e.key === 'notes'){
    notes = JSON.parse(e.newValue)
    let note = notes.find((note) => {
      return note.id === noteId
    })
    
    if(note === undefined){
      location.assign('/index.html')
    }
    
    titleElement.value = note.title 
    bodyElement.value = note.body 
    updateElement.textContent = updatedTime(note.updatedAt)
  }
})