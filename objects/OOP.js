class Person {
  constructor(firstName, lastName, age, likes){
    this.firstName = firstName 
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }

  getBio(){
    let bio = `${this.firstName} is ${this.age}`
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}`
    });
  return bio
  }

  setName(fullName){
    const name = fullName.split(" ")
    this.firstName = name[0]
    this.lastName = name[1]
  }

}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes){
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio(){
    return `${this.firstName} ${this.lastName} is a ${this.position}`    
  }
  getYearsLeft(){
    return 65 - this.age
  }


}

// const myPerson = new Employee("John", "Smith", 28, "Developer", ["Gaming", "Coding"] )
// myPerson.setName("Tom Wells")
// console.log(myPerson.getBio())
// console.log(myPerson.getYearsLeft())

// const Person = function(firstName, lastName, age, likes){
//   this.firstName = firstName 
//   this.lastName = lastName
//   this.age = age
//   this.likes = likes
// }

// Person.prototype.getBio = function(){
//   let bio = `${this.firstName} is ${this.age}`
//     this.likes.forEach(like => {
//       bio += ` ${this.firstName} likes ${like}`
//     });
//   return bio
// }

// Person.prototype.setName = function(fullName){
//   const name = fullName.split(" ")
//   this.firstName = name[0]
//   this.lastName = name[1]
// }

// const me = new Person("John", "Smith", 46, ["games", "drifting", "shooting"])

// me.getBio = function(){
//   return "this is fake!"
// }
// me.setName("Dave Smith")
// console.log(me.getBio())

// const person2 = new Person("Tony", "Turner", 19, ["Golfing", "Frisbee"])

// console.log(person2.getBio())

class Student extends Person{
  constructor(firstName, lastName, age, grade, likes){
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  getBio(){
    if(this.grade >= 70){
      return `${this.firstName} ${this.lastName} is passing!`
    }else {
      return `${this.firstName} ${this.lastName} is failing!`
    }
  }
  updateGrade(addPoints){
    return this.grade += addPoints
  }
}

const Jimmy = new Student("Jimmy", "Neutron", 8)
console.log(Jimmy)
console.log(Jimmy.updateGrade(90))
console.log(Jimmy)