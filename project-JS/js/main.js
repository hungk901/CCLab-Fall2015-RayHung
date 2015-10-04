
var city = '';
var state = '';
var country = '';
var APIKey = '6f206707a93aceba';

var thisSecond;
var thisMinute;
var thisHour = moment().format('HH');
var thisTime;
var thisDate = moment().format('ddd, MMM DD, YYYY');

var wordSetTransfer = function(){
    var temp = new Array();
    var before = thisTime;
    var after = "";
    for ( var i = 0; i < before.length; i++) {
        if (before.charCodeAt(i) == 32){
            temp[i] = 12288;
        }
        else if (before.charCodeAt(i) >= 33 && before.charCodeAt(i) <= 126){
            temp[i] = before.charCodeAt(i) + 65248;
        }
        else {
            temp[i] = before.charCodeAt(i);
        }
        after += String.fromCharCode(temp[i]);
    }
    thisTime = after;
}

var displayDate = function(){
    // thisDate;
    // console.log(thisDate);
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

    thisTime = thisHour + ':' + thisMinute + ':' + thisSecond + ' ';
    wordSetTransfer();
    // console.log(thisTime);
    $('.time').text(thisTime);

    setTimeout(updateTime, 1000);
}

var loadTime = function(response){
    if (response.response.error) {
        // alert(response.response.error);
        alert('Please check your input!');
        return;
    };

    // globalTimeUTC.unshift(response.current_observation.local_tz_offset);
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

    var globalCity = response.current_observation.display_location.city;
    var globalState = response.current_observation.display_location.state;
    // var globalCountry = response.current_observation.display_location.country_iso3166;
    // var globalCountry = response.current_observation.display_location.state_name;
    var globalTemp = response.current_observation.temp_f;
    var globalWeather = response.current_observation.weather;

    if (globalState != '') {
        $('.currentCity').val(city + ', ' + country);
    }
    else {
        $('.currentCity').val(city + ', ' + country);
    };
    // $('.temperature').text(globalTemp);
    // $('.weather').text(globalWeather);
};

var getWeather = function(){
    var weatherAPI = 'http://api.wunderground.com/api/'+ APIKey + '/conditions/q/' + country + '/' + city + '.json';

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
    console.log(city);
    console.log(country);
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
