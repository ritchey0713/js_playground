// const getPuzzle = (wordCount) => {
//  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((resp) => {
//       if(resp.status === 200){
//         return resp.json()
//       } else {
//         throw new Error("failed to fetch puzzle")
//       }
//   }).then((data) => {
//     return data.puzzle
//   })
// }

const getPuzzle = async (wordCount) => {
  const resp = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if(resp.status === 200){
      const data = await resp.json()
      return data.puzzle
    }else{
      throw new Error("Error fetching!")
    }
 }



 //  const getCountry = async (countryCode) => {
//   const resp = await fetch(`http://restcountries.eu/rest/v2/all`, {})
//      if(resp.status === 200){
//        const data = await resp.json()
//        return data.find((country) => country.alpha2Code === countryCode).name
//      } else {
//        throw new Error("Could not fetch Countries")
//      }
//    }
 
 
// const getCountry = (countryCode) => {
//  return fetch(`http://restcountries.eu/rest/v2/all`, {}).then((resp) => {
//     if(resp.status === 200){
//       return resp.json()
//     } else {
//       throw new Error("Could not fetch Countries")
//     }
//   }).then((data) => {
//       return data.find((country) => country.alpha2Code === countryCode).name
//   })
// }

// const getLocation = async () => {
//   const resp =  await fetch(`http://ipinfo.io/json?token=010974ce661a1a`, {})
//     if(resp.status === 200){
//       return resp.json()
//     }else {
//       throw new Error("Could not fetch data")
//     }
//   }

// const getLocation = () => {
//   return fetch(`http://ipinfo.io/json?token=010974ce661a1a`, {}).then((resp) => {
//     if(resp.status === 200){
//       return resp.json()
//     }else {
//       throw new Error("Could not fetch data")
//     }
//   }).then((data) => {
//     return data
//   })
// }

// const getCurrentCountry = async () => {
//   const location = await getLocation()
//   const country = await getCountry(location.country)
//   return country
// }

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener("readystatechange", (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//       const data = JSON.parse(e.target.responseText)
//       resolve(data.puzzle)
//     }else if (e.target.readyState === 4 ){
//       reject("An error has taken place")
//     }
//   })
  
//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
// })

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((country) => country.alpha2Code === countryCode)
//       resolve(country)   

//   } else if (e.target.readyState === 4 ){
//          reject(`Errors have occured`)
//        }
// })

// request.open('GET', 'http://restcountries.eu/rest/v2/all')
// request.send()
// })



