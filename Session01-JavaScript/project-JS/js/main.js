
var city = 'New York';
var country = 'New York';
var APIKey = '6f206707a93aceba';

var thisSecond;
var thisMinute;
var thisHour = moment().format('HH');
var thisTime;
var thisDate = moment().format('ddd, MMM DD, YYYY');

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
        var forecastClass = '.forecast_' + i;
        $(forecastClass).empty();

        var forecastDate = response.forecast.simpleforecast.forecastday[i]['date']['weekday'];

        var fahrenheitHigh = response.forecast.simpleforecast.forecastday[i]['high']['fahrenheit'];
        var fahrenheitLow = response.forecast.simpleforecast.forecastday[i]['low']['fahrenheit'];
        var fahrenheit = fahrenheitLow + '&deg;F' + '-' + fahrenheitHigh + '&deg;F';
        var fahrenheitDate = "<br/>" + fahrenheit + "<br/>" + forecastDate;

        // var celciusHigh = response.forecast.simpleforecast.forecastday[i]['high']['celsius'];
        // var celciusLow = response.forecast.simpleforecast.forecastday[i]['low']['celsius'];
        // var celsius = celciusLow + '&deg;C' +'-' + celciusHigh + '&deg;C';
        // var celsiusDate = "<br/>" + celsius + "<br/>" + forecastDate;

        var iconURL = "http://icons.wxug.com/i/c/i/";
        var forecastIcon = response.forecast.simpleforecast.forecastday[i]['icon'];
        iconURL = iconURL + forecastIcon + '.gif';

        $('<img src="' + iconURL + '" />').appendTo(forecastClass);
        $(forecastClass).append(fahrenheitDate);
    };
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
        tags: '"' + city + ',' + country  + ',' + 'sky' + '"',
        tagmode: "ALL",
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

    $('.currentCity').val(city + ', ' + country);

    getWeather();
    getPhoto();
};

var init = function(){
    $('#submit').click(function(e){
        e.preventDefault(e);
        setLocation();
    });

    if ($('.currentCity') == "City, State/Country") {
        $('.currentCity').attr('onfocus', '');
    };
};

var autoFillTags = function(){
    var availableTags = [
        "Amsterdam, Netherlands",
        "Athens, Greece",
        "Atlanta, Goregia",
        "Bangkok, Thailand",
        "Barcelona, Spain",
        "Beijing, Beijing",
        "Berlin, Germany",
        "Boston, Massachusetts",
        "Brisbane, Australia",
        "Budapest, Hungary",
        "Buenos Aires, Argentina",
        "Cairo, Egypt",
        "Cape Town, South Africa",
        "Chicago, Illinois",
        "Delhi, India",
        "Dubai, United Arab Emirates",
        "Dublin, Ireland",
        "Florence, Italy",
        "Frankfurt, Germany",
        "Hong Kong, Hong Kong",
        "Istanbul, Turkey",
        "Jerusalem, Israel",
        "KualaLumpur, Malaysia",
        "Las Vegas, Nevada",
        "London, England",
        "Los Angeles, California",
        "Madrid, Spain",
        "Mexico, Mexico",
        "Miami, Florida",
        "Montreal, Canada",
        "Moscow, Russia",
        "Mumbai, India",
        "Munich, Germany",
        "New York, New York",
        "Rio de Janeiro, Brazil",
        "Prague, Czech Republic",
        "Rome, Italy",
        "San Francisco, California",
        "Seattle, Washington",
        "Seoul, Korea",
        "Singapore, Singapore",
        "St. Petersburg, Russia",
        "Sydney, Australia",
        "Taipei, Taiwan",
        "Tokyo, Japan",
        "Toronto, Canada",
        "Paris, France",
        "Vancouver, Canada",
        "Venice, Italy",
        "Vienna, Austria",
        "Washington, D.C."
    ];
    $( ".currentCity" ).autocomplete({
        source: availableTags,
        position: { my: "left bottom", at: "left top", collision: "flip" }
    });
};

$(document).ready(function(){
    autoFillTags();
    updateTime();
    displayDate();
    getWeather();
    getPhoto();
    init();
});
