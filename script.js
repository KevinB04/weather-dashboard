$(document).ready(function() {

  $("#searchWeather").on("click", function(e){
    e.preventDefault();
    var city = $("#city-input").val().trim();

    searchWeather(city)
  })

  function searchWeather(name) {
    console.log(name)
    $.ajax({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=f0f1cd985ea5ac5733a66416d91fac2f&units=imperial",
      dataType: "json"
    }).then(function(res){
      console.log(res)

      var card = $("<div>").addClass("card mt-5");
      var cardBody = $("<div>").addClass("card-body");
      var cardTitle = $("<h2>").addClass("card-title").text(res.name);
      var image = $("<img>").attr("src", "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png")

      $("#today").append(card.append(cardBody.append(cardTitle.append(image))))

      searchForecast(res.coord.lat, res.coord.lon)
    })
  }

  function searchForecast(lat, lon) {

    $.ajax({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=f0f1cd985ea5ac5733a66416d91fac2f&units=imperial`,
      dataType: "json"
    }).then(function(res){
      console.log(res)
      for(var i = 1; i < 6; i++) {
        console.log(res.daily[i])
        // create cards for each day
      }
    })
  }

})