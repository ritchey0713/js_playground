// const myFunc = () => {
//   const message = "This is my message!"
//   const printMessage = () => {
//     console.log(message)
//   }
//   return printMessage
// }

// const printmess = myFunc()
// printmess()

// const createCounter = () => {
//   let count = 0

//   return {
//     increment(){
//       count++
//     },
//     decrement(){
//       count--
//     },
//     get(){
//       return count
//     }
//   }
// }

// const counter = createCounter()
// counter.increment()
// counter.decrement()
// counter.decrement()
// console.log(counter.get())

// const createAdder = (a) => {
//   return (b) => {
//     return a+ b 
//   }
// }

// const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))

// const add100 = createAdder(100)
// console.log(add100(-90))

const tipper = (tip) => {
  const tipPercent = tip * .01
  return(bill) => {
    return tipPercent * bill
  }
}

const tip15 = tipper(15)
console.log(tip15(100))

const tip20 = tipper(20)
console.log(tip20(100))