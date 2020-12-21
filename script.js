 $(document).ready(function() {

   console.log("Hello World");

   var APIKey = "f0f1cd985ea5ac5733a66416d91fac2f";

   var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={f0f1cd985ea5ac5733a66416d91fac2f}',

   var lat = response.coord.lat;
   var lon = response.coord.lon;

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
     

     if(currentWeather === "Clear") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
       currentIcon.attr("style", "height: 60px, width: 60px");
     } else if(currentWeather === "Thunderstorms") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/11d.png");
       currentIcon.attr("style", "height: 60px, width: 60px");
     } else if (currentWeather === "Cloudy") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
       currentIcon.attr("style", "height: 60px, width: 60px");
     } else if (currentWeather === "Mist") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/50d.png")
       currentIcon.attr("style", "height: 60px, width: 60px");
     } else if (currentWeather === "Rain") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
       currentIcon.attr("style", "height: 60px, width: 60px");
     } else if (currentWeather === "Snow") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
       currentIcon.attr("style", "height: 60px, width: 60px");
     } else if (currentWeather === "Few Clouds") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/02d.png")
       currentIcon.attr("style", "height: 60px, width: 60px");
     } else if (currentWeather === "Scattered Clouds") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png")
       currentIcon.attr("style", "height: 60px, width: 60px");
     } else if (currentWeather === "Tornado") {
       var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/50d.png")
       currentIcon.attr("style", "height: 60px, width: 60px");

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



       $(" .description").val(localStorage.getItem(" "))

     $(document).on("click", ".city", alertCityName);

     renderButtons();