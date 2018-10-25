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
  const todoText = document.createElement('p')
      todoText.textContent = todo.text
      return todoText
}

const summaryDom = (toDosUnfinished) => {
  const summary = document.createElement("p")
    summary.textContent = `You have ${toDosUnfinished.length} left`
    document.querySelector('#todos').appendChild(summary)
    return summary
}