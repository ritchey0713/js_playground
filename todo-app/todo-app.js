const todos = [
  {
    text: "finish car",
    completed: true}, 
  {
    text:'get better at JS',
    completed: false}, 
  {
    text: "get a new job!",
    completed: true}, 
  { 
    text:"buy more stuffs!",
  completed: false }]

// const ps = document.querySelectorAll('p')

// ps.forEach((item) => {
//   if(item.textContent.includes("the")){
//     item.remove()
//   }
// })

const filters = {
  searchText: ''
}

const renderTodos = function(todos, filters){
  const filteredtodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })
    
  
  const toDosUnfinished =  filteredtodos.filter((todo) => {
    return !todo.completed 
  })

  document.querySelector('#todos').innerHTML = ""
  
  const toDoLeft = document.createElement("p")
toDoLeft.textContent = `You have ${toDosUnfinished.length} left`
document.querySelector('#todos').appendChild(toDoLeft)

filteredtodos.forEach((todo) => {
  const todoText = document.createElement('p')
  todoText.textContent = todo.text
  document.querySelector('#todos').appendChild(todoText)
  }) 
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener("click", (e) => {
  console.log('clicked!')
})

document.querySelector('#add-todo-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})