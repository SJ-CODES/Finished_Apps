console.log(dishes)

let dishesUL = document.getElementById("dishesUL")
let entreeDishes = document.getElementById("entreeDishes")
let starterDishes = document.getElementById("starterDishes")
let dessertDishes = document.getElementById("dessertDishes")


   displayDishes(dishes)


function displayDishes (dishesToDisplay){
    for(let index = 0; index < dishesToDisplay.length; index++) {

        let dish = dishesToDisplay[index]
         
        const dishItems = `
                          <li id="dish-Item">
                              <i>${dish.course}</i>
                              <br>
                              <b>${dish.title} </b>
                              <br>
                              <img src="${dish.imageURL}"/>
                              <br>
                              <b>${dish.description}</b> 
                              <br>
                              <i> Price: ${dish.price}<i>
                          </li> 
        `
        dishesUL.insertAdjacentHTML("beforeend" , dishItems)

        
    
       
    }
    // let entreeButton = document.createElement("Button")
    // let entreeButton.innerHTML = "Entree"
    // entreeButton.addEventListener = ("click" , function() {
        
        
    // })
    // entreeDishes.appendChild(entreeButton)
}

