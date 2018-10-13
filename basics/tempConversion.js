let fahrenheit = 50 // 0 cel 273.15 kel

//calculate celsius and store then print  (fahrenheit - 32) * (5/9)
// calculate in kelvin store and print (fahrenheit + 459.67) * (5/9)

let celsius = (fahrenheit - 32) * (5/9)
console.log(celsius)

let kelvin = (fahrenheit + 459.67) * (5/9)
console.log(kelvin)

let temp = 100 
if(temp <= 32){
  console.log("Its freezing!!!")
}

if(temp >= 90){
  console.log("its scortching out here!!!")
}

let age = 28

// let isChild = age <= 7 

// let isSenior = age >= 65 

// console.log(isChild)
// console.log(isSenior)

if(age <= 7){
  console.log("They are a child!!")
}

if(age >= 65){
  console.log("they are old!")
}