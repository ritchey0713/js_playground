const getDataCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, "This is the data")
  }, 2000)
}

