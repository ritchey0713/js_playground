const account = {
  name: "Dj",
  expenses: [],
  income: [],
  addExpense: function(item, cost){
    this.expenses.push({
      item: item,
      cost: cost
    })
  },
  getAccountSummary: function(){
    let total = 0 
    this.income.forEach((income) => {
      total += income.amount
    })

    this.expenses.forEach((item) => {
      total -= item.cost 
    })
    return `${account.name} has $${total} in his account!`
  },
  addIncome: function(income, amount){
    this.income.push({
      income: income,
      amount: amount
    })
  } 
}



account.addExpense("Rent", 950)

account.addExpense("Coffee", 2)

account.addIncome("Work", 953)

console.log(account.getAccountSummary())
