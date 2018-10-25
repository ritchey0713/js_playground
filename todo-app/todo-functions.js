const getSavedTodos = () => {
  const toDoJSON = localStorage.getItem('todos')

  if(toDoJSON != null){
  return JSON.parse(toDoJSON)
  }else{
    return []
  }
}

const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
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
  summaryDom(toDosUnfinished) 
  filteredTodos.forEach((todo) => {
  document.querySelector('#todos').appendChild(generateToDoDom(todo))
  }) 
}

const generateToDoDom = (todo) => {
  const toDoContainer = document.createElement('div')
  const todoText = document.createElement('span')
  const button = document.createElement('button')
 // create checkbox
  const checkbox = document.createElement('INPUT')
  checkbox.setAttribute('type', 'checkbox')
  button.textContent = 'x'

  toDoContainer.appendChild(checkbox)
  
  todoText.textContent = todo.text
  toDoContainer.appendChild(todoText)
  toDoContainer.appendChild(button)
  return toDoContainer
}

const summaryDom = (toDosUnfinished) => {
  const summary = document.createElement("p")
    summary.textContent = `You have ${toDosUnfinished.length} left`
    document.querySelector('#todos').appendChild(summary)
    return summary
}