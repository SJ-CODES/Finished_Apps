let getCoffeeOrders = document.getElementById("getCoffeeOrders")
let addOrderBtn = document.getElementById("addOrder")
let searchEmailBtn = document.getElementById("searchEmailBtn")
let searchEmail = document.getElementById("searchEmail")

let emailTextbox = document.getElementById("email")
let typeTextbox = document.getElementById("type")
let sizeTextbox= document.getElementById("size")
let priceTextbox = document.getElementById("price")

let deleteBtn = document.getElementById("deleteBtn")
let deleteEmail = document.getElementById("deleteEmail")



getOrdersBtn.addEventListener("click", function() {
    
    let request = new XMLHttpRequest()
        request.addEventListener("load" , function() {
        console.log(this.responseText)
        let coffeeOrder = JSON.parse(this.responseText)
        console.log(coffeeOrder)

        let coffeeOrderItem = coffeeOrder.map((order) => {
            return `<h2>
                    <b> Email: ${order.email}<b>
                    <br>
                    <b> Type: ${order.type}<b>
                    <br>
                        Size: ${order.size}
                    <br>
                     <i>Price:${order.price}<i>
                    </h2>
            
            `
        
        })

    getCoffeeOrders.innerHTML = coffeeOrderItem.join("")
})

request.open("GET" , "https://troubled-peaceful-hell.glitch.me/orders")
request.send()



})

addOrderBtn.addEventListener("click" , function() {
  

        let email = emailTextbox.value
        let type = typeTextbox.value
        let size = sizeTextbox.value
        let price = priceTextbox.value

        
  
    let requestParams = {
        email: email,
        type: type,
        size: size,
        price: parseFloat(price)
    }

let addRequest = new XMLHttpRequest()
addRequest.addEventListener("load" , function() {

})
        
   
    addRequest.open("POST", "https://troubled-peaceful-hell.glitch.me/orders")
    addRequest.setRequestHeader("Content-Type", "application/json")
    addRequest.send(JSON.stringify(requestParams))
})

// searchEmailBtn.addEventListener("click" , function(){
//     let searchEmailInList = searchEmail.value
//     let searchRequest = new XMLHttpRequest()
//     searchRequest.addEventListener("Load", function() {
//         result = JSON.parse(this.responseText)
        
//     })
//     searchRequest.open("GET",`https://troubled-peaceful-hell.glitch.me/orders/${searchEmail}`)
//     searchRequest.send()
// })


// deleteBtn.addEventListener("click" , function() {
//     let deleteEmailNow = deleteEmail.value
// })