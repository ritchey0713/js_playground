const Person = function(firstName, lastName, age){
  this.firstName = firstName 
  this.lastName = lastName
  this.age = age
}

Person.prototype.getBio = function(){
  return `${this.firstName} is ${this.age}`
}

const me = new Person("John", "Smith", 46)
me.firstName = "Dave"
console.log(me)

const person2 = new Person("Tony", "Turner", 19)
console.log(person2)