
let searchCityWeather = document.getElementById("searchCityWeather")
let getWeatherTextBox = document.getElementById("getWeatherTextBox")
let displayCity = document.getElementById('displayCity')


searchCityWeather.addEventListener("click", function() {
    
    let cityEntered = getWeatherTextBox.value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityEntered}&appid=eb8b495e77f55c3766f7dcfbc3ac426e&units=imperial`)
            .then((response) => {
                return response.json()
            }).then((weatherInCity) => {
                  console.log(weatherInCity)
                  displayCityWeather(weatherInCity)
            })

    })


    function displayCityWeather(weatherInCity) {
        let cityEntered = getWeatherTextBox.value
        getWeatherTextBox = ''
        let cityWeatherItems = `<h2>  
                                        <i> 
                                       <b> ${cityEntered}:</b>
                                        </i>
                                        <br>
                                        
                                        Low: ${weatherInCity.main.temp_min}
                                        <br>
                                        
                                        High: ${weatherInCity.main.temp_max}
                                        <br>
                                        
                                        Current pressure: ${weatherInCity.main.pressure}

                                </h2>
                        
        
        `

        displayCity.innerHTML = cityWeatherItems

    }


