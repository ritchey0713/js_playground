const notes = [{
  title: "Vacation",
  body: "I wanna go to Texas"
},{
  title: "Diet",
  body: "Dont eat so much fast food"
},{
  title: "Algorithms",
  body: "Practice more!"
},{
  title: "land a Dev Job!",
  body: "Network more and more!!!"
}]

const ps = document.querySelectorAll('p')

ps.forEach(p => {
  p.textContent = "******"
});

// add new element 
const newPara = document.createElement('p')
newPara.textContent  = 'this is a new element'
document.querySelector('body').appendChild(newPara)