document.addEventListener('DOMContentLoaded', function(){


  document.querySelector('form').addEventListener('submit', Drink.addNewDrink)
  Drink.fetchDrinks()
})
