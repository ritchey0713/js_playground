const todos = [
  {
    text: "finish car",
    completed: false}, 
  {
    text:'get better at JS',
    completed: false}, 
  {
    text: "get a new job!",
    completed: true}, 
  { 
    text:"buy more stuffs!",
  completed:true }]

// console.log(`You have ${todos.length} things! to do`)

// todos.splice(2,1)


// todos.push("find a new place to live!")


// todos.shift()
// console.log(todos)

// todos.forEach((toDo, index) => {
//   console.log(`${index + 1}. ${toDo}`)
// })

// for(let i = 0; i < todos.length; i++){
//   console.log(`${i + 1}. ${todos[i]} `)
// }

// const searchTodos = (todos, text) => {
//   const deleteIndex = todos.findIndex((todo, index) => {
//     return todo.text.toLowerCase() === text.toLowerCase() 
//   })
//   if(deleteIndex > -1){
//     todos.splice(deleteIndex, 1)
//   }
// }




// searchTodos(todos, "finish car")
// // console.log(findTodo)

// //remove by index splice?

// console.log(todos)

const getThingsToDo = function(todos){
  return todos.filter((todo, index) => {
    return todo.completed === false
  })
}

console.log(getThingsToDo(todos))