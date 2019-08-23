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
          let drinkCard = new Drink(drink)
          drinkCard.renderToDom(drink)
        })
      })
    }

    static addNewDrink(){
        let drinkFormData = {
          name:event.target[0].value,
          recipe:event.target[1].value,
          image: event.target[2].value
        }
        fetch(DRINK_URL, {
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(drinkFormData)
        }).then(resp => resp.json())
          .then(drinkFormData => {
            let new_drink = new Drink(drinkFormData)
            new_drink.renderToDom()
          })
     }


     fetchDrinkReviews(event){
       if(event.target.tagName === 'BUTTON'){
       fetch(`http://localhost:3000/drinks/${this.id}`)
       .then(resp => resp.json())
       .then(drink => this.renderReviewsToDom(drink))
      }
     }

     renderReviewsToDom(drink){
       let h3Tag = document.createElement('h3')
       let reviewDiv = document.querySelector('.review')
       h3Tag.innerText = `${this.name} reviews:`
       reviewDiv.prepend(h3Tag)
       drink.reviews.map(review => {
            let pTag = document.createElement('p')
            pTag.innerHTML += `<em>"${review.comment}" ~ ${review.name}</em>`
            reviewDiv.appendChild(pTag)
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

        backDiv.addEventListener('click', () => {
          this.fetchDrinkReviews(event)
        })

      }



  // CLASS CLOSURE
}
