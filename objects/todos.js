const todos = ["finish car", 'get better at JS', "get a new job!", "buy more stuffs!"]

console.log(`You have ${todos.length} things! to do`)

todos.splice(2,1)


todos.push("find a new place to live!")


todos.shift()
console.log(todos)

// todos.forEach((toDo, index) => {
//   console.log(`${index + 1}. ${toDo}`)
// })

// for(let i = 0; i < todos.length; i++){
//   console.log(`${i + 1}. ${todos[i]} `)
// }

