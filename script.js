navigator.geolocation.getCurrentPosition(function(position) {

    var lati = position.coords.latitude;
    var long = position.coords.longitude;
    

var date = new Date();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var time = $('#time');
var temperature = $('#temp');
var info = $('#info');
var card1 = $('.card-one');
var card2 = $('.card-two');
var card3 = $('.card-three');
var card4 = $('.card-four');
var secCard = $('.card-secondary');
var weatherDiv = $('#weather');
var funnyText = $("#text");
var image = $('#image');
var city = $('#city');

// Subcards elements
var time1 = $('#time1');
var temp1 = $('#temp1');
var weather1 = $('#weather1');

var time2 = $('#time2');
var temp2 = $('#temp2');
var weather2 = $('#weather2');

var time3 = $('#time3');
var temp3 = $('#temp3');
var weather3 = $('#weather3');

var time4 = $('#time4');
var temp4 = $('#temp4');
var weather4 = $('#weather4');

var textSuperCold = ["Lemme guess... Canada?", "Just don't pee outside"];
var textCold = ["It's a good day to break the ice!", "Better pull your pants up"];
var textColdRain = ["Typical English Summer", "Developer of this app had no freaking clue what to put here. I mean... \"Typical English Summer\" sums it the best, right?"];
var textSuperRain = ["It looks like you'll need a canoe...", "Someone's gonna get wet :P"];
var textPrettyCold = ["No so hot, not so cold.", "It's not raining at least..."];
var textWarm = ["Weather is already great, now it's your turn to make this day better", "What a beautiful day"];
var textWarmRain = ["Warm rain? I hope it's only water...", "You could find some mushrooms in the forest I guess"];
var textHot = ["Shame on you, the weather is getting hotter than you!", "Better stay hydrated"];
var textHotRain = ["Look for the rainbow", "I think you're gonna enjoy this rain"];
var textSuperHot = ["SUPA HOT FIRE", "Pretty warm, huh?"];

$.ajax({
  url: "https://api.openweathermap.org/data/2.5/forecast?",
  dataType: 'json',
  data: {
    lat: lati,
    lon: long,
    units: 'metric',
    appid: 'f1c0b3f419ad2992bfebd3104df6d7a7'
  },
  success: function(result) {
    console.log(result);
      
    var weatherId = result.list[0].weather[0].id;
      
    // temperature set
    temperature.text(Math.round(result.list[0].main.temp) + '°C');
      
    // time icon set  
    if (result.list[0].dt_txt[11] == 0 && result.list[0].dt_txt[12] == 0) {
        time.html('<i class="wi wi-time-12"></i>' + ' 00:00');
    } else if (result.list[0].dt_txt[11] == 0 && result.list[0].dt_txt[12] == 3) {
        time.html('<i class="wi wi-time-3"></i>' + ' 03:00');
    } else if (result.list[0].dt_txt[11] == 0 && result.list[0].dt_txt[12] == 6) {
        time.html('<i class="wi wi-time-6"></i>' + ' 06:00');
    } else if (result.list[0].dt_txt[11] == 0 && result.list[0].dt_txt[12] == 9) {
        time.html('<i class="wi wi-time-9"></i>' + ' 09:00');
    } else if (result.list[0].dt_txt[11] == 1 && result.list[0].dt_txt[12] == 2) {
        time.html('<i class="wi wi-time-12"></i>' + ' 12:00');
    } else if (result.list[0].dt_txt[11] == 1 && result.list[0].dt_txt[12] == 5) {
        time.html('<i class="wi wi-time-3"></i>' + ' 15:00');
    } else if (result.list[0].dt_txt[11] == 1 && result.list[0].dt_txt[12] == 8) {
        time.html('<i class="wi wi-time-6"></i>' + ' 18:00');
    } else if (result.list[0].dt_txt[11] == 2 && result.list[0].dt_txt[12] == 1) {
        time.html('<i class="wi wi-time-9"></i>' + ' 21:00');
    }
    
    // weather icon set
    weatherDiv.html('<i class="wi wi-owm-' + weatherId + '"></i>');
    
    // background color changing
    if (result.list[0].main.temp < 0) {
        info.css("background-color", "#eee");
        info.css("color", "#333");
        $('.wi').css("color", "#333");
    } else if (result.list[0].main.temp >= 0 && result.list[0].main.temp <= 10) {
        info.css("background-color", "#72caff");
    } else if (result.list[0].main.temp > 10 && result.list[0].main.temp < 20) {
        info.css("background-color", "#FFA500");
    } else if (result.list[0].main.temp >= 20 && result.list[0].main.temp <= 35) {
        info.css("background-color", "#fff500");
        info.css("color", "#333");
        $('.wi').css("color", "#333");
    } else if (result.list[0].main.temp > 35) {
        info.css("background-color", "red");
    }

    // funny text set
    if (result.list[0].main.temp < -30) {
        // Super Cold
        funnyText.html(textSuperCold[Math.round(Math.random())]);
    } else if (result.list[0].main.temp >= -30 && result.list[0].main.temp <= 0) {
        // Cold
        funnyText.html(textCold[Math.round(Math.random())]);
    } else if (result.list[0].main.temp > 0 && result.list[0].main.temp < 15 && result.list[0].weather[0].main == "Rain") {
        // Pretty Cold Rain
        funnyText.html(textColdRain[Math.round(Math.random())]);
    } else if (result.list[0].main.temp > 0 && result.list[0].main.temp < 15 && result.list[0].weather[0].main != "Rain") {
        // Pretty Cold
        funnyText.html(textPrettyCold[Math.round(Math.random())]);
    } else if (result.list[0].main.temp >= 15 && result.list[0].main.temp < 22 && result.list[0].weather[0].main == "Rain") {
        // Warm Rain
        funnyText.html(textWarmRain[Math.round(Math.random())]);
    } else if (result.list[0].main.temp >= 15 && result.list[0].main.temp < 22 && result.list[0].weather[0].main != "Rain") {
        // Warm
        funnyText.html(textWarm[Math.round(Math.random())]);
    } else if (result.list[0].main.temp >= 22 && result.list[0].main.temp < 35 && result.list[0].weather[0].main == "Rain") {
        // Hot Rain
        funnyText.html(textHotRain[Math.round(Math.random())]);
    } else if (result.list[0].main.temp >= 22 && result.list[0].main.temp < 35 && result.list[0].weather[0].main != "Rain") {
        // Hot
        funnyText.html(textHot[Math.round(Math.random())]);
    } else if (result.list[0].main.temp >= 35) {
        // Super Hot
        funnyText.html(textSuperHot[Math.round(Math.random())]);
    } else {
        // Plan B
        alert("It looks like app just crashed or there is something fishy going on with the weather (or my API provider broke something). Whatever the problem is, I'm really sorry, please hit me up on: kubami9@spoko.pl. I'll fix it. Have a great day!");
    }

    // image set
    if (result.list[0].weather[0].main == "Rain") {
        image.css('background-image', 'url(img/raining.jpg)');
    } else if (result.list[0].weather[0].main == "Snow") {
        image.css('background-image', 'url(img/snowing.jpg)');
    } else if (result.list[0].weather[0].main == "Clouds") {
        image.css('background-image', 'url(img/cloudy.jpg)');
    } else if (result.list[0].weather[0].main == "Clear" && result.list[0].main.temp < 5) {
        image.css('background-image', 'url(img/clear.jpg)');
    } else if (result.list[0].weather[0].main == "Clear" && result.list[0].main.temp >= 5 && result.list[0].main.temp < 35) {
        image.css('background-image', 'url(img/sunny.jpg)');
    } else if (result.list[0].weather[0].main == "Clear" && result.list[0].main.temp >= 35) {
        image.css('background-image', 'url(img/super_hot.jpg)');
    }

    // city, day of the week and Celsius/Fahrenheit switch
    image.html("<span id='city'>" + result.city.name + " | " + result.city.country + "</span><br>")
    image.append("<span id='weekdays'>" + weekdays[date.getDay()] + "</span><br><input type='checkbox' id='switch' /><small>Celsius</small><label for='switch'>Toggle</label><small>Fahrenheit</small>");

    // Celsius/Fahrenheit functions
    $('#image :checkbox').change(function() {
        if (this.checked) {
            fahrenheit();
        } else {
            celsius();
        }
    });
    function fahrenheit() {
        temperature.text(Math.round(result.list[0].main.temp)*9/5+32 + '°F');
        temp1.text(Math.round(result.list[1].main.temp)*9/5+32 + '°F');
        temp2.text(Math.round(result.list[2].main.temp)*9/5+32 + '°F');
        temp3.text(Math.round(result.list[3].main.temp)*9/5+32 + '°F');
        temp4.text(Math.round(result.list[4].main.temp)*9/5+32 + '°F');
    }
    function celsius() {
        temperature.text(Math.round(result.list[0].main.temp) + '°C');
        temp1.text(Math.round(result.list[1].main.temp) + '°C');
        temp2.text(Math.round(result.list[2].main.temp) + '°C');
        temp3.text(Math.round(result.list[3].main.temp) + '°C');
        temp4.text(Math.round(result.list[4].main.temp) + '°C');
    }



    // SUBCARDS SET

    // Temperature
    temp1.text(Math.round(result.list[1].main.temp) + '°C');
    temp2.text(Math.round(result.list[2].main.temp) + '°C');
    temp3.text(Math.round(result.list[3].main.temp) + '°C');
    temp4.text(Math.round(result.list[4].main.temp) + '°C');

    // Time
    // card1
    if (result.list[1].dt_txt[11] == 0 && result.list[1].dt_txt[12] == 0) {
        time1.html('<i class="wi wi-time-12"></i>' + ' 00:00');
    } else if (result.list[1].dt_txt[11] == 0 && result.list[1].dt_txt[12] == 3) {
        time1.html('<i class="wi wi-time-3"></i>' + ' 03:00');
    } else if (result.list[1].dt_txt[11] == 0 && result.list[1].dt_txt[12] == 6) {
        time1.html('<i class="wi wi-time-6"></i>' + ' 06:00');
    } else if (result.list[1].dt_txt[11] == 0 && result.list[1].dt_txt[12] == 9) {
        time1.html('<i class="wi wi-time-9"></i>' + ' 09:00');
    } else if (result.list[1].dt_txt[11] == 1 && result.list[1].dt_txt[12] == 2) {
        time1.html('<i class="wi wi-time-12"></i>' + ' 12:00');
    } else if (result.list[1].dt_txt[11] == 1 && result.list[1].dt_txt[12] == 5) {
        time1.html('<i class="wi wi-time-3"></i>' + ' 15:00');
    } else if (result.list[1].dt_txt[11] == 1 && result.list[1].dt_txt[12] == 8) {
        time1.html('<i class="wi wi-time-6"></i>' + ' 18:00');
    } else if (result.list[1].dt_txt[11] == 2 && result.list[1].dt_txt[12] == 1) {
        time1.html('<i class="wi wi-time-9"></i>' + ' 21:00');
    }
    // card2
    if (result.list[2].dt_txt[11] == 0 && result.list[2].dt_txt[12] == 0) {
        time2.html('<i class="wi wi-time-12"></i>' + ' 00:00');
    } else if (result.list[2].dt_txt[11] == 0 && result.list[2].dt_txt[12] == 3) {
        time2.html('<i class="wi wi-time-3"></i>' + ' 03:00');
    } else if (result.list[2].dt_txt[11] == 0 && result.list[2].dt_txt[12] == 6) {
        time2.html('<i class="wi wi-time-6"></i>' + ' 06:00');
    } else if (result.list[2].dt_txt[11] == 0 && result.list[2].dt_txt[12] == 9) {
        time2.html('<i class="wi wi-time-9"></i>' + ' 09:00');
    } else if (result.list[2].dt_txt[11] == 1 && result.list[2].dt_txt[12] == 2) {
        time2.html('<i class="wi wi-time-12"></i>' + ' 12:00');
    } else if (result.list[2].dt_txt[11] == 1 && result.list[2].dt_txt[12] == 5) {
        time2.html('<i class="wi wi-time-3"></i>' + ' 15:00');
    } else if (result.list[2].dt_txt[11] == 1 && result.list[2].dt_txt[12] == 8) {
        time2.html('<i class="wi wi-time-6"></i>' + ' 18:00');
    } else if (result.list[2].dt_txt[11] == 2 && result.list[2].dt_txt[12] == 1) {
        time2.html('<i class="wi wi-time-9"></i>' + ' 21:00');
    }
    // card3
    if (result.list[3].dt_txt[11] == 0 && result.list[3].dt_txt[12] == 0) {
        time3.html('<i class="wi wi-time-12"></i>' + ' 00:00');
    } else if (result.list[3].dt_txt[11] == 0 && result.list[3].dt_txt[12] == 3) {
        time3.html('<i class="wi wi-time-3"></i>' + ' 03:00');
    } else if (result.list[3].dt_txt[11] == 0 && result.list[3].dt_txt[12] == 6) {
        time3.html('<i class="wi wi-time-6"></i>' + ' 06:00');
    } else if (result.list[3].dt_txt[11] == 0 && result.list[3].dt_txt[12] == 9) {
        time3.html('<i class="wi wi-time-9"></i>' + ' 09:00');
    } else if (result.list[3].dt_txt[11] == 1 && result.list[3].dt_txt[12] == 2) {
        time3.html('<i class="wi wi-time-12"></i>' + ' 12:00');
    } else if (result.list[3].dt_txt[11] == 1 && result.list[3].dt_txt[12] == 5) {
        time3.html('<i class="wi wi-time-3"></i>' + ' 15:00');
    } else if (result.list[3].dt_txt[11] == 1 && result.list[3].dt_txt[12] == 8) {
        time3.html('<i class="wi wi-time-6"></i>' + ' 18:00');
    } else if (result.list[3].dt_txt[11] == 2 && result.list[3].dt_txt[12] == 1) {
        time3.html('<i class="wi wi-time-9"></i>' + ' 21:00');
    }
    // card4
    if (result.list[4].dt_txt[11] == 0 && result.list[4].dt_txt[12] == 0) {
        time4.html('<i class="wi wi-time-12"></i>' + ' 00:00');
    } else if (result.list[4].dt_txt[11] == 0 && result.list[4].dt_txt[12] == 3) {
        time4.html('<i class="wi wi-time-3"></i>' + ' 03:00');
    } else if (result.list[4].dt_txt[11] == 0 && result.list[4].dt_txt[12] == 6) {
        time4.html('<i class="wi wi-time-6"></i>' + ' 06:00');
    } else if (result.list[4].dt_txt[11] == 0 && result.list[4].dt_txt[12] == 9) {
        time4.html('<i class="wi wi-time-9"></i>' + ' 09:00');
    } else if (result.list[4].dt_txt[11] == 1 && result.list[4].dt_txt[12] == 2) {
        time4.html('<i class="wi wi-time-12"></i>' + ' 12:00');
    } else if (result.list[4].dt_txt[11] == 1 && result.list[4].dt_txt[12] == 5) {
        time4.html('<i class="wi wi-time-3"></i>' + ' 15:00');
    } else if (result.list[4].dt_txt[11] == 1 && result.list[4].dt_txt[12] == 8) {
        time4.html('<i class="wi wi-time-6"></i>' + ' 18:00');
    } else if (result.list[4].dt_txt[11] == 2 && result.list[4].dt_txt[12] == 1) {
        time4.html('<i class="wi wi-time-9"></i>' + ' 21:00');
    }

    // Weather
    weather1.html('<i class="wi wi-owm-' + result.list[1].weather[0].id + '"></i>');
    weather2.html('<i class="wi wi-owm-' + result.list[2].weather[0].id + '"></i>');
    weather3.html('<i class="wi wi-owm-' + result.list[3].weather[0].id + '"></i>');
    weather4.html('<i class="wi wi-owm-' + result.list[4].weather[0].id + '"></i>');

    // Background Color
    // card1
    if (result.list[1].main.temp < 0) {
        card1.css("background-color", "#eee");
        card1.css("color", "#333");
    } else if (result.list[1].main.temp >= 0 && result.list[1].main.temp <= 10) {
        card1.css("background-color", "#72caff");
    } else if (result.list[1].main.temp > 10 && result.list[1].main.temp < 20) {
        card1.css("background-color", "#FFA500");
    } else if (result.list[1].main.temp >= 20 && result.list[1].main.temp <= 35) {
        card1.css("background-color", "#fff500");
        card1.css("color", "#333");
    } else if (result.list[1].main.temp > 35) {
        card1.css("background-color", "red");
    }
    // card2
    if (result.list[2].main.temp < 0) {
        card2.css("background-color", "#eee");
        card2.css("color", "#333");
    } else if (result.list[2].main.temp >= 0 && result.list[2].main.temp <= 10) {
        card2.css("background-color", "#72caff");
    } else if (result.list[2].main.temp > 10 && result.list[2].main.temp < 20) {
        card2.css("background-color", "#FFA500");
    } else if (result.list[2].main.temp >= 20 && result.list[2].main.temp <= 35) {
        card2.css("background-color", "#fff500");
        card2.css("color", "#333");
    } else if (result.list[2].main.temp > 35) {
        card2.css("background-color", "red");
    }
    // card3
    if (result.list[3].main.temp < 0) {
        card3.css("background-color", "#eee");
        card3.css("color", "#333");
    } else if (result.list[3].main.temp >= 0 && result.list[3].main.temp <= 10) {
        card3.css("background-color", "#72caff");
    } else if (result.list[3].main.temp > 10 && result.list[3].main.temp < 20) {
        card3.css("background-color", "#FFA500");
    } else if (result.list[3].main.temp >= 20 && result.list[3].main.temp <= 35) {
        card3.css("background-color", "#fff500");
        card3.css("color", "#333");
    } else if (result.list[3].main.temp > 35) {
        card3.css("background-color", "red");
    }
    // card4
    if (result.list[4].main.temp < 0) {
        card4.css("background-color", "#eee");
        card4.css("color", "#333");
    } else if (result.list[4].main.temp >= 0 && result.list[4].main.temp <= 10) {
        card4.css("background-color", "#72caff");
    } else if (result.list[4].main.temp > 10 && result.list[4].main.temp < 20) {
        card4.css("background-color", "#FFA500");
    } else if (result.list[4].main.temp >= 20 && result.list[4].main.temp <= 35) {
        card4.css("background-color", "#fff500");
        card4.css("color", "#333");
    } else if (result.list[4].main.temp > 35) {
        card4.css("background-color", "red");
    }

 }
});


// Geolocation scope end
});
