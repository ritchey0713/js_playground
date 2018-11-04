'use strict'

const todos = getSavedTodos()

const filters = {
  searchText: '',
  hideComplete: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', e => {
  e.preventDefault()
  let text = e.target.elements.text.value.trim()
  console.log()
  if(text.length > 0){
  todos.push( { 
    id: uuidv4(),
    text,
    completed: false
  })
    saveTodos(todos)
   e.target.elements.text.value = ""
    renderTodos(todos, filters)
  }
})

document.querySelector('#hide-complete').addEventListener('change', (e) => {
  filters.hideComplete = e.target.checked
  renderTodos(todos, filters)
})