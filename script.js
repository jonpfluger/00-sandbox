var APIkey = "8a2487e5c66135ea4bfe51d53f17f5b0"

function getWeatherByCity(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey)
        .then(function(response) {
            console.log(response)
        })
        .then(function() {

        })
}

getWeatherByCity("Milwaukee")