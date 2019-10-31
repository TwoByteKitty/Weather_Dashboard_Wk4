
//api key: 570a95666fe4d4e3cacabb69009293b9

function getWeather(){
    //get value of search field

    var APIKey = "570a95666fe4d4e3cacabb69009293b9";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=" + $('#search').val() + "&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        console.log(response);

        $("#city").text(response.name + "|" );
        $("#temp").text("Temperature (F): " + response.main.temp);
        $("#humid").text("Humidity: " + response.main.humidity);
        $("#windSp").text("Wind Speed: " + response.wind.speed);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });
}

$('#searchBtn').on('click', getWeather);