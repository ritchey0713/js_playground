// const processData = async () => {
//   throw new Error("bad request!")
//   return 12
// }

// processData().then((data) => {
//   console.log('data', data)
// }).catch((err) => {
//   console.log('err', err)
// })

const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {  
   typeof num === "number" ? resolve(num * 2) : reject("num must be a number")
  }, 2000)
})

const processData = async () => {
  let data = await getDataPromise(2)
  data = await getDataPromise(data)
  data = await getDataPromise(data)
  return data
}

processData().then((data) => {
  console.log('data', data)
}).catch((err) => {
  console.log('err', err)
})