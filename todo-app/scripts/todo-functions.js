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
  const emptyList = document.createElement('p')
  emptyList.classList.add('empty-message')
  const todosEl = document.querySelector('#todos')
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideComplete || !todo.completed
    return searchTextMatch && hideCompletedMatch
  })

  const toDosUnfinished =  filteredTodos.filter((todo) => !todo.completed)

  todosEl.innerHTML = ""
  todosEl.appendChild(summaryDom(toDosUnfinished)) 

  if(filteredTodos.length > 0){
    filteredTodos.forEach((todo) => {
    todosEl.appendChild(generateToDoDom(todo))
    })} else {
      emptyList.textContent = `There are no To-Dos to show!`
      todosEl.appendChild(emptyList)
    } 
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
  const summary = document.createElement("h2")
  summary.classList.add('list-title')

  if(toDosUnfinished.length >= 2){
   summary.textContent = `You have ${toDosUnfinished.length} To-dos left`
  } else if (toDosUnfinished.length === 1){
    summary.textContent = `You have a single To-do left!`
  } else {
    summary.textContent = `You have no To-Dos currently!`
  }

  document.querySelector('#todos').appendChild(summary)
  return summary
}