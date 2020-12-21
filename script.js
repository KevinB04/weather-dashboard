$(document).ready(function() {

  console.log("Hello World");

  var APIKey = "f0f1cd985ea5ac5733a66416d91fac2f";

  var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=metric" + "&APPID=f0f1cd985ea5ac5733a66416d91fac2f",

  $('#searchWeather').click(function(){
  var city = $("#city-input").val();
    if(city != ''){
      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        success: function(data){
          console.log(data);
        }
  });
    }else{
      $("#error").html('Field cannot be blank');
    }


    // DOM Variables
  
    // JavaScript Variables
  
    // Function Definitions
  
    // Function Calls
  
    // Event Listeners

    function alertCityName() {
      var city = $(this).data("name");
      alert(city);
    }

    function renderButtons() {

      $("#submit").empty();

      for (var i = 0; i < city.length; i++) {
        var a = $("<button>");
        a.addClass("city");
        a.attr("data-name", city[i]);
        a.text(city[i]);
        $("submit").append(a);
      }
    }

    $("#add-city").on("click", function(event) {
      event.preventDefault();
      var city = $("search").val().trim();
      city.push(city);
      renderButtons();
    });


  
  // We then created an AJAX call

      // $(".city").text("City: " + response.name);
      // $(".wind").text("Wind Speed: " + response.wind.speed);
      // $(".humidity").text("Humidity: " + response.main.humidity);
      // $(".temp").text("Temperature: " + response.main.temp);
  
    
      // AJAX GOES HERE LAST!
      });

      $(" .description").val(localStorage.getItem(" "))

    $(document).on("click", ".city", alertCityName);

    renderButtons();