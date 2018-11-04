'use strict'

const getSavedTodos = () => {
  const toDoJSON = localStorage.getItem('todos')

  try{
    return toDoJSON  ? JSON.parse(toDoJSON) : [] 
  }catch(e){
    []
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

  const toDosUnfinished =  filteredTodos.filter((todo) => !todo.completed)

  document.querySelector('#todos').innerHTML = ""
  summaryDom(toDosUnfinished) 
  filteredTodos.forEach((todo) => {
  document.querySelector('#todos').appendChild(generateToDoDom(todo))
  }) 
}

const removeToDo = (id) => {
  const toDoIndex = todos.findIndex((todo) => {
    return todo.id === id
  })
  todos.splice(toDoIndex, 1)
}

const toggleCheckBox = (id) => {
  const todo = todos.find((todo) => todo.id === id)
    if(todo){
      todo.completed = !todo.completed
    }
  
}

const generateToDoDom = (todo) => {
  const toDoContainer = document.createElement('label')
  const containerEl = document.createElement('div')
  const todoText = document.createElement('span')
  const button = document.createElement('button')
  
 // create checkbox
  const checkbox = document.createElement('INPUT')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed

  toDoContainer.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  toDoContainer.appendChild(containerEl)

  button.textContent = 'Remove'
  button.classList.add('button', 'button--text')
  button.addEventListener('click', () => {
    removeToDo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

    checkbox.addEventListener('change', () => {
    toggleCheckBox(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  containerEl.appendChild(checkbox)
  todoText.textContent = todo.text
  containerEl.appendChild(todoText)
  toDoContainer.appendChild(button)
  
  return toDoContainer
}

const summaryDom = (toDosUnfinished) => {
  const summary = document.createElement("p")
    summary.textContent = `You have ${toDosUnfinished.length} left`
    document.querySelector('#todos').appendChild(summary)
    return summary
}