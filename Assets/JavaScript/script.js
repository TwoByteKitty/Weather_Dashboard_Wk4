

//api key: 570a95666fe4d4e3cacabb69009293b9
   

    //get date
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var currentDate = 
        ((''+month).length<2 ? '0' : '') + month + '/' +
        ((''+day).length<2 ? '0' : '') + day  + '/' + d.getFullYear();
    


function getWeather(){
    //get value of search field
    var queryCity = $('#search').val()

    var APIKey = "570a95666fe4d4e3cacabb69009293b9";
   
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=" + queryCity + "&units=imperial&appid=" + APIKey;

    // Ajax call to weather api
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
      .then(function(response) {
        console.log(response);
        $("#city").text(response.name + " || " + currentDate);
        $("#temp").text("Temperature (F): " + response.main.temp);
        $("#humid").text("Humidity: " + response.main.humidity);
        $("#windSp").text("Wind Speed: " + response.wind.speed);

      });
}

$('#searchBtn').on('click', getWeather);