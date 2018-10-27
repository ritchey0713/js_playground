const calculator = function(score, total){
  if (typeof score === "number" && typeof total === 'number'){

  const grade = (score / total) * 100
  letterGrade = ""
  
  if(grade >= 90){
    letterGrade = "A"
    
  }else if(grade >= 80){
    letterGrade = "B"
    
  }else if(grade >= 70){
    letterGrade = "C"

  }else if(grade >= 60){
    letterGrade = "D"

  }else{
    letterGrade = "F"
  }
  return `You got an ${letterGrade} (${grade}%)!`
  } else {
    throw Error("please use numbers only ")
  }
}


//console.log(calculator(1, 20))
try {
  const result = calculator(1, "a")
  console.log(result)
} catch(e) {
  console.log(e.message) 
}