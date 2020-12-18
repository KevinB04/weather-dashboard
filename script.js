console.log("Hello World");

$("#hour-9 .description").val(localStorage.getItem("hour-9"))

// api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}

$(document).ready(function(){
    // DOM Variables
  
    // JavaScript Variables
  
    // Function Definitions
  
    // Function Calls
  
    // Event Listeners
  
  
   // This is our API key. Add your own API key between the ""
    var APIKey = "f0f1cd985ea5ac5733a66416d91fac2f";
  
  // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;
  
  // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     console.log(response);
      console.log(queryURL);
      $(".city").text("City: " + response.name);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature: " + response.main.temp);
  
    
      // AJAX GOES HERE LAST!
      });
    })