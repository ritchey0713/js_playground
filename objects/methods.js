let restaurant = {
  name: "Red Robin",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize){
    console.log(partySize)
  }
}

restaurant.checkAvailability(5)
