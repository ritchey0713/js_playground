let calculator = (score, total) => {
  let grade = (score / total) * 100
  if(grade =< 100 && grade >= 90){
    return `You got an A (${grade}%)!`
  }else if(grade <= 89 && grade >= 80){
    return `You got an B (${grade}%)!`
  }else if(grade <= 79 && grade >= 70){
    return `You got an C (${grade}%)!`
  }else if(grade <= 69 && grade >= 60){
    return `You got an D (${grade}%)!`
  }else{
    return `You got an F (${grade}%)!`
  }
}

console.log(calculator(14, 20))