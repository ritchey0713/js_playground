let todos = []

const filters = {
  searchText: '',
  hideComplete: false
}

const toDoJSON = localStorage.getItem('toDos')

if(toDoJSON != null){
 todos = JSON.parse(toDoJSON)
}

const renderTodos = function(todos, filters){
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideComplete || !todo.completed
    return searchTextMatch && hideCompletedMatch
  })

  const toDosUnfinished =  filteredTodos.filter((todo) => {
    return !todo.completed 
  })

  document.querySelector('#todos').innerHTML = ""
  
  const toDoLeft = document.createElement("p")
toDoLeft.textContent = `You have ${toDosUnfinished.length} left`
document.querySelector('#todos').appendChild(toDoLeft)

filteredTodos.forEach((todo) => {
  const todoText = document.createElement('p')
      todoText.textContent = todo.text
      document.querySelector('#todos').appendChild(todoText)
  }) 
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
  localStorage.setItem('toDos', JSON.stringify(todos))
   e.target.elements.addToDo.value = ""
    renderTodos(todos, filters)
})

document.querySelector('#hide-complete').addEventListener('change', (e) => {
  filters.hideComplete = e.target.checked
  renderTodos(todos, filters)
})