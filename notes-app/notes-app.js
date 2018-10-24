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

document.querySelector('#create-note').addEventListener('click', function(e){
  console.log(e)
  e.target,this.textContent = "clicked!"
})

document.querySelector('#remove-all').addEventListener('click', () => {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove()
  })
})

