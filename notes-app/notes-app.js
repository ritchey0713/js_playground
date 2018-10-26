let notes = getSavedNotes()
const timeStamp = moment().valueOf()
const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
  const id = uuidv4()
  
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timeStamp,
    editedAt: timeStamp
  })
  saveNotes(notes)
  // id = notes[notes.length - 1].id
  location.assign(`/edit.html#${id}`)

})

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  console.log(e.target.value)
})

window.addEventListener('storage', (e) => {
  if(e.key === 'notes')
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
})

const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')

// console.log(now.toString())
// // now.minute(1)
// //console.log(now.minute())
// console.log(now.format('MMMM Do YYYY'))
// console.log(now.fromNow())

// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp).toString())

// // const birthDay = moment('1990-04-07')
// // console.log(birthDay.format('ll'))

// const bDay = moment()

// bDay.year(1990).month(3).date(7)
// console.log(bDay.format('ll'))
console.log(now)