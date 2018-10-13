let isAccountLocked = false;
let userRole = 'user'

// if(isAccountLocked){
//   console.log("sorry this account is locked!")
// }else{
//   console.log("This account is unlocked!")
// }


if(isAccountLocked){
  console.log("sorry this account is locked!")
}else if (userRole === 'admin'){
  console.log("welcome admin")
}else{
  console.log("welcome user!")
}


let temp = 110

if(temp <= 32){
  console.log("its freezing outside!")
}else if(temp > 33 && temp < 90){
  console.log("its a nice day!")
}else{
  console.log("its hot out here!")
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
  console.log("Vegan menu for both!")
}else if(isGuestOneVegan || isGuestTwoVegan){
console.log("We need one vegan menu")
}else{
  console.log("No vegan menus needed")
}