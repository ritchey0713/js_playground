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

const toDosUnfinished =  todos.filter((todo) => {
    return todo.completed === false 
  })

 

const toDoLeft = document.createElement("p")
toDoLeft.textContent = `You have ${toDosUnfinished.length} left`
document.querySelector('body').appendChild(toDoLeft)

todos.forEach((todo) => {
  const todoText = document.createElement('p')
  todoText.textContent = todo.text
  document.querySelector('body').appendChild(todoText)
}) 


