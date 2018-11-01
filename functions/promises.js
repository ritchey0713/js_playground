// callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, "This is the data")
  }, 2000)
}

getDataCallback((error, data) => {
  if(error){
    console.log(error)
  }else {
    console.log(data)
  }
})

//promise 

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {  
     resolve(`success data: ${data}`)
    //  reject("This is a promise error")
    }, 2000)
  })


const myPromise = getDataPromise(123)

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})