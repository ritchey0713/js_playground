let restaurant = {
  name: "Red Robin",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize){
    let seatsLeft = this.guestCapacity - this.guestCount
    if(seatsLeft > partySize){
    return true
    }else{
      return false
    }
  },
  seatParty: function(partySize){
    this.guestCount += partySize
  },
  removeParty: function(partySize){
    this.guestCount -= partySize
  }
}

// let status = restaurant.checkAvailability(99)

// console.log(status)

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))