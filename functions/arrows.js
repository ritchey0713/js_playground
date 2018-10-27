const square = (num) =>  num*num

const squareLong = (num) => {
  return num*num
}

//console.log(square(10))

const people = [
  {name: "John",
   age: 30
  },
  {name: "Sarah",
   age: 22
  },
  {name: "Timmy",
   age: 45
  }
]

// const underThirty = (people) => {
//   people.filter((person) => {
//     return person.age < 30
//   })
// }

const under30 = people.filter(person => person.age < 30)

//console.log(under30)

const find_person = people.find(person => person.age === 45)

//console.log(find_person.name)

const add = (a, b) => {
  return arguments[0] + arguments[1]
}

//console.log(add(11, 22, 33, 44))

const car = {
  color: 'red',
  getSummary(){
    return this.color
  }
}

console.log(car.getSummary())