// http://www.omdbapi.com/?s=batman&apikey=ff0865e7
// http://www.omdbapi.com/?i=tt0372784&apikey=ff0865e7

let batmanMovies = document.getElementById('batmanMovies')

let request = new XMLHttpRequest()
request.addEventListener('load' , function(){
    let batmanMoviesList = JSON.parse(this.responseText)
    console.log(batmanMoviesList)

    let batmanMovieItems = batmanMoviesList.Search.map((batmanMovie)
                    ` <div>
                        ${batmanMovie.title}
                        ${batmanMovie.year}
                        ${batmanMovie.rating}
                        ${batmanMovie.release}
                        ${batmanMovie.director}
                        <img 'src=${batmanMovie.poster}'/>
                     </div>
        `
})
    batmanMovies.innerHTML = batmanMovieItems.join("")


batmanMoviesURL = 'http://www.omdbapi.com/?s=batman&apikey=ff0865e7'
request.open('GET' , batmanMoviesURL)
request.send()

// let nextRequest = new XMLHttpRequest()
// nextRequest.addEventListener('load' , function())