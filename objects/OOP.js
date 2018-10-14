const Person = function(firstName, lastName, age, likes){
  this.firstName = firstName 
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function(){
  let bio = `${this.firstName} is ${this.age}`
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}`
    });
  return bio
}

Person.prototype.setName = function(fullName){
  const name = fullName.split(" ")
  this.firstName = name[0]
  this.lastName = name[1]
}

const me = new Person("John", "Smith", 46, ["games", "drifting", "shooting"])

me.getBio = function(){
  return "this is fake!"
}
me.setName("Dave Smith")
console.log(me.getBio())

const person2 = new Person("Tony", "Turner", 19, ["Golfing", "Frisbee"])

console.log(person2.getBio())