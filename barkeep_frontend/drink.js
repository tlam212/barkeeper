let DRINK_URL = 'http://localhost:3000/drinks'

class Drink{

    constructor(drink){
      this.id = drink.id,
      this.name = drink.name,
      this.recipe = drink.recipe,
      this.image = drink.image
    }


    static fetchDrinks(){
      fetch(DRINK_URL)
      .then(resp => resp.json())
      .then(drinks => {
        drinks.forEach(drink =>{
          let new_drink = new Drink(drink)
          new_drink.renderToDom(drink)
        })
      })
    }


    renderToDom(){
      let container = document.querySelector('.container')
      let mainContainerDiv = document.createElement('div')
      mainContainerDiv.setAttribute('class', 'mainContainer')
      let theCardDiv = document.createElement('div')
      theCardDiv.id = `drink-card-${this.id}`
      theCardDiv.setAttribute('class', 'theCard')
      let frontDiv = document.createElement('div')
      let backDiv = document.createElement('div')
      backDiv.setAttribute('class', 'back')
      let reviewDiv = document.createElement('div')
      reviewDiv.setAttribute('class', 'review')

      frontDiv.innerHTML +=`
      <img class="front" src='${this.image}'/>`

      backDiv.innerHTML = `
      <h2 class='dn'>${this.name}</h2>
      <p>${this.recipe}</p><br><br>
      <button>See review</button>
      `
      backDiv.append(reviewDiv)
      theCardDiv.append(frontDiv)
      theCardDiv.append(backDiv)
      mainContainerDiv.append(theCardDiv)
      container.append(mainContainerDiv)

      // backDiv.addEventListener('click', () => {
      //   this.fetchDrinkReviews(event)
      // })

    }





























  // CLASS CLOSURE
}
