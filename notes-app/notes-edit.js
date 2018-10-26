const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find((note) => {
  return note.id === noteId
})

if(note === undefined){
  location.assign('/index.html')
}

const noteTitle = document.querySelector('#note-title').value = note.title
const noteBody = document.querySelector('#note-body').value = note.body

const updateNoteTitle = document.querySelector('#note-title').addEventListener('input', (e) => {
  note.title = e.target.value
  saveNotes(notes)
})

const updateNoteBody = document.querySelector('#note-body').addEventListener('input', (e) => {
  note.body = e.target.value
  saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', () => {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('/index.html')
})