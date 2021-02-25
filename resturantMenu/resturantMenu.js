// console.log(dishes)

let dishesUL = document.getElementById("dishesUL")
// let entreeDishes = document.getElementById("entreeDishes")
// let starterDishes = document.getElementById("starterDishes")
// let dessertDishes = document.getElementById("dessertDishes")


//    displayDishes(dishes)


function displayDishes (dishesToDisplay){
    dishesUL.innerHTML = ""
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
    
}

let courses = [ "Starters" , "Entrees" , "Desserts"]

let buttonContainer = document.getElementById("courseButtons")

for(let index = 0; index < courses.length; index++ ){
    let createButton = document.createElement("button")
    createButton.innerText = courses[index]

    createButton.addEventListener( "click" , function() {
        console.log(createButton.innerText)
         let filterDishes = dishes.filter(function(dish){
             return dish.course == courses[index]

         })
       console.log(filterDishes)
       displayDishes(filterDishes)
    })
buttonContainer.appendChild(createButton)
}

