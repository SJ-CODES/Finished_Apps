let imagePosterUL = document.getElementById("imagePosterUL")


function displayImagePosters() {
    
    
         
        const posterItems = `
                          <li id="poster-Item">
                          <img ${src="poster1.png"}>
                          <img ${src="poster2.png"}>
                          <img  ${src="poster3.png"}>
                          <img  ${src="poster4.png"}>
                          <img  ${src="poster5.png"}>
                              
                          </li> 
        `
        imagePosterUL.insertAdjacentHTML("beforeend" , posterItems)
    
    
    


    
}

// https://www.w3schools.com/howto/howto_js_slideshow.asp

// https://www.youtube.com/watch?v=4YQ4svkETS0

