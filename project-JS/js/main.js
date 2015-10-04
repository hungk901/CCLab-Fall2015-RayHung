
var city = '';
var country = '';
var APIKey = '6f206707a93aceba';

var thisSecond;
var thisMinute;
var thisHour = moment().format('HH');
var thisTime;
var thisDate = moment().format('dddd, MMM DD, YYYY');

// var wordSetTransfer = function(){
//     var temp = new Array();
//     var before = thisTime;
//     var after = "";
//     for ( var i = 0; i < before.length; i++) {
//         if (before.charCodeAt(i) == 32){
//             temp[i] = 12288;
//         }
//         else if (before.charCodeAt(i) >= 33 && before.charCodeAt(i) <= 126){
//             temp[i] = before.charCodeAt(i) + 65248;
//         }
//         else {
//             temp[i] = before.charCodeAt(i);
//         }
//         after += String.fromCharCode(temp[i]);
//     }
//     thisTime = after;
// }

var displayDate = function(){
    var whiteSpace = " ";
    thisDate = thisDate;
    // thisDate = thisDate + " ";
    $('.date').text(thisDate);
}

var updateTime = function(){
    thisSecond = Number(moment().format('ss'));
    thisMinute = Number(moment().format('mm'));
    thisHour = Number(thisHour);

    if (thisSecond == 60) {
        thisSecond = 0;
        thisMinute = thisMinute + 1;
    };
    if (thisMinute == 60) {
        thisMinute = 0;
        thisHour = thisHour + 1;
    };

    if (thisSecond < 10) {
        thisSecond = "0" + thisSecond;
    };
    if (thisMinute < 10) {
        thisMinute = "0" + thisMinute;
    };
    if (thisHour < 10) {
        thisHour = "0" + thisHour;
    };

    thisTime = thisHour + ':' + thisMinute + ':' + thisSecond;
    // wordSetTransfer();

    $('.time').text(thisTime);

    setTimeout(updateTime, 1000);
}

var loadTime = function(response){
    if (response.response.error) {
        // alert(response.response.error);
        alert('Please check your input!');
        return;
    };

    var globalTimeUTC = response.current_observation.local_tz_offset;
    thisHour = moment().utcOffset(globalTimeUTC).format('HH');
    thisDate = moment().utcOffset(globalTimeUTC).format('ddd, MMM DD, YYYY');

    $('.currentCity').val(city + ', ' + country);

    updateTime();
    displayDate();
}

var loadWeather = function(response){
    if (response.response.error) {
        // alert(response.response.error);
        alert('Please check your input!');
        return;
    };
    // console.log("response=" +JSON.stringify(response));  // Show JSON.response in Console.


    for (var i = 1; i <= 5; i++) {
        var iconURL = "http://icons.wxug.com/i/c/j/";

        var forecastDate = response['forecast']['simpleforecast']['forecastday'][i]['date']['weekday'];

        var fahrenheitHigh = response.forecast.simpleforecast.forecastday[i]['high']['fahrenheit'];
        var fahrenheitLow = response.forecast.simpleforecast.forecastday[i]['low']['fahrenheit'];
        var fahrenheit = fahrenheitLow + ' - ' + fahrenheitHigh;

        var celciusHigh = response.forecast.simpleforecast.forecastday[i]['high']['celsius'];
        var celciusLow = response.forecast.simpleforecast.forecastday[i]['low']['celsius'];
        var celsius = celciusLow + ' - ' + celciusHigh;

        var forecastIcon = response.forecast.simpleforecast.forecastday[i]['icon'];
        iconURL = iconURL + forecastIcon + '.gif'

        console.log(fahrenheit, celsius, forecastDate);
        console.log(iconURL);
    };

    // $('.temperature').text(globalTemp);
    // $('.weather').text(globalWeather);
};

var getWeather = function(){
    var weatherAPI = 'http://api.wunderground.com/api/'+ APIKey + '/conditions/forecast10day/q/' + country + '/' + city + '.json';

    $.ajax({
        url : weatherAPI,
        dataType : 'jsonp',
        success : function(response){
            loadWeather(response);
            loadTime(response);
        }
    });
};

var getPhoto = function(){
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    $.getJSON(flickrAPI, {
        tags: city + ', ' + country + ', sky',
        tagmode: "all",
        format: "json"
    },

    function(data) {
        // alert("data = " + JSON.stringify(data)); // Show data from JSON.response.

        $.each(data.items, function(i, item) {
            var flickrPhoto = item.media.m;
            flickrPhoto = flickrPhoto.split("_m.jpg", 1) + "_b.jpg";    // Restructuring the URL to get HQ photo.

            var imageURL = ' url("' + flickrPhoto + '") ';
            $('body').css("background-image", imageURL);

            if (i === 0) {
                return false;
            };
        });
    });
};

var setLocation = function(){
    var locationArray = [];
    locationArray = $('.currentCity').val().split(", ")

    city = locationArray[0];
    country = locationArray[1];

    if(city == null || city == ''){
        alert('Please type in a City, State/Country.');
    };

    getWeather();
    getPhoto();
};

var init = function(){
    $('#submit').click(function(e){
        e.preventDefault(e);
        setLocation();
        $('.currentCity').attr('onfocus', '');
    });
};

var autoFillTags = function(){
    var availableTags = [
        "Beijing, Beijing",
        "Brisbane, Australia",
        "Frankfurt, Germany",
        "Hong Kong, Hong Kong",
        "New York, New York",
        "Taipei, Taiwan",
        "Tokyo, Japan",
        "Paris, France"
    ];
    $( ".currentCity" ).autocomplete({
      source: availableTags
    });
};

$(document).ready(function(){
    autoFillTags();
    init();
    updateTime();
    displayDate();
});
