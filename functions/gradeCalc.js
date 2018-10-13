let calculator = (score, total) => {
  let grade = (score / total) * 100
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
}

console.log(calculator(14, 20))