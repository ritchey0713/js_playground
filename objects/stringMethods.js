let name = "   John Smith "

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

let password = "ghj123xyz890"

console.log(password.includes("abc"))

console.log(name.trim())


//return true if longer than 8 and doesnt contain password
// let isValidPassword = (password) => {
//   if(password.length > 8 && !password.includes("password")){
//     return true
//   }else{
//     return false
//   }

// }

let isValidPassword = (password) => {
    return password.length > 8 && !password.includes("password") 

}

console.log(isValidPassword("asvds"))
console.log(isValidPassword("password123"))
console.log(isValidPassword("Zoomba123"))