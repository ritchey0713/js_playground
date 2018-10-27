const products = []

const product = products[0]

//truthy - values that are true in boolean context 
//falsey - values that are false in boolean context
// falsey - false, 0 , '', null, undefined, NaN

if(product !== undefined){
  console.log("product found")
}else{
  console.log("product not found")
}