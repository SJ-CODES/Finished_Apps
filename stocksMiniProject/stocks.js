
const textBox = document.getElementById("textBox")
const showQuotesBtn = document.getElementById("showQuotesBtn")
const quotesOnPage = document.getElementById("quotesOnPage")


function displayQuotes (showStock){
    
    
         
        const quoteItems = `
                          <li id="quote-Item">
                              <i>${showStock.name}</i>
                              <br>
                              <b> Stock Price: ${showStock.price} </b>
                              
                          </li> 
        `
        quotesOnPage.insertAdjacentHTML("beforeend" , quoteItems)
    
    
    

}

showQuotesBtn.addEventListener("click" , function() {
    let quoteName = textBox.value
  let showStock =  getStockQuote(quoteName)
  displayQuotes(showStock)
            
})
      
// how to make price update and show every 2 seconds



