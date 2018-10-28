//primitive value: string, null, number, boolean, undefined 

// obj: myObj -> Obj.proto -> null 
// array: myArray -> Array.proto -> OBJ.proto -> null 
//func: myfunc -> func.proto -> OBJ.proto -> null
// string: myString -> string.proto -> obj.proto -> null
// num: myNum -> num.proto -> obj.proto -> null
// boolean: myBool -> bool.proto -> obj.proto -> null

// const team = ["John", "Sarah"]

// console.log(team)

// const getScore = () => 1

// console.log(getScore)

// const product = 'computer'
// console.log(product)

// const otherProduct = new String('phone')
// console.log(otherProduct)