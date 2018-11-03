'use strict'

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  }catch(e){
    return []
  }
}

//remove note from list 
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id )

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

const sortNotes = (notes, sortBy) => {
  if(sortBy === 'byEdited'){
    return notes.sort((a,b) => {
      if(a.updatedAt > b.updatedAt){
        return -1
      }else if (a.updatedAt < b.updatedAt){
        return 1
      }else {
        return 0
      }
    })
  } else if(sortBy === "byCreated") {
    return notes.sort((a,b) => {
      if(a.createdAt > b.createdAt){
        return -1
      }else if (a.createdAt < b.createdAt){
        return 1
      }else {
        return 0
      }
    })
  }else if (sortBy === "byAlpha"){
    return notes.sort((a,b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()){
        return 1
      }else {
        return 0
      }
    })
  } else {
  return notes
  }
}

const renderNotes = (notes, filters) => {
  const notesEl = document.querySelector('#notes')
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  )
    notesEl.innerHTML = ""

    if(filteredNotes.length > 0){
      filteredNotes.forEach(note => {
        const noteElement =  generateNoteDom(note)
       notesEl.appendChild(noteElement)
      })
    } else {
      const emptyMessage = document.createElement('p')
      emptyMessage.textContent = 'No notes to show!'
      emptyMessage.classList.add('empty-message')
      notesEl.appendChild(emptyMessage)
    }
}

const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// generate last updated at 

const updatedTime = (timeStamp) =>  (`Last updated: ${moment(timeStamp).fromNow()}`)
