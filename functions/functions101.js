let greetUser = function(){
  console.log("welcome user!")
}

greetUser()

let square = function(num){
  let result = num * num
  return result
}

let value = square(10)
console.log(value)

let convert = function(fahrenheit){
  let celsius = (fahrenheit - 32) * (5/9)
  return celsius
}

let conversion = convert(32)
let conversionTwo = convert(68)
console.log(conversion)
console.log(conversionTwo)
