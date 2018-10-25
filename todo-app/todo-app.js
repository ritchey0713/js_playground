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
  toDoName = e.target.elements.addToDo.value
  todos.push( { text: toDoName,
                completed: false
  })
    saveTodos(todos)
   e.target.elements.addToDo.value = ""
    renderTodos(todos, filters)
})

document.querySelector('#hide-complete').addEventListener('change', (e) => {
  filters.hideComplete = e.target.checked
  renderTodos(todos, filters)
})