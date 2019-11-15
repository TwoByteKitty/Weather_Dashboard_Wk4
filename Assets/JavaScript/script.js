

//api key: 570a95666fe4d4e3cacabb69009293b9
   

    //get date
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var currentDate = 
        ((''+month).length<2 ? '0' : '') + month + '/' +
        ((''+day).length<2 ? '0' : '') + day  + '/' + d.getFullYear();
   


function renderWeatherCard(weatherData) {
  let weatherIcon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
  const cardTemplate = `<div class="card bg-light m-3 width-auto">
  <div class="card-header row mx-0 justify-content-md-center align-items-center" id="city">
    <div class="col-sm h3">${weatherData.name}</div>
    <div class="col-sm h3">${weatherData.date}</div>
    <div class="col-sm"><img class="float-right" src="${weatherIcon}"></div> 
  </div>
  <div class="card-body lead" style="font-weight: 400;">
      <p class="card-text"> <em>Current Temperature: </em> ${weatherData.main.temp}&#8457; </p>
      <p class="card-text"> <em>Humidity: </em> ${weatherData.main.humidity}% </p>
      <p class="card-text"> <em>Wind Speed: </em> ${weatherData.wind.speed} mph</p>
  </div>
</div>`
  return cardTemplate;
}


function getWeather(event){
    event.preventDefault();
    var queryCity = $('#search').val();
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

        response.date = currentDate;
        $("#weatherDataCol").prepend(renderWeatherCard(response));

      });
}

$('#searchBtn').on('click', getWeather);