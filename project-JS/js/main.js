
var city = '';
var state = '';
var country = '';
var APIKey = '6f206707a93aceba';

var updateTime = function(globalTimeUTC){
    // Get Local UTC.
    var thisUTC = new Date();
    thisUTC = (thisUTC.getTimezoneOffset())/60;

    var globalTimeUTC = Number(globalTimeUTC);
    console.log(globalTimeUTC);

    var thisDate = moment().utcOffset(globalTimeUTC).format('ddd, MMM DD, YYYY')

    var thisTime = moment().utcOffset(globalTimeUTC).format('HH:mm:ss');

    // Get Local UTC.
    // var thisUTC = new Date();
    // thisUTC = (thisUTC.getTimezoneOffset())/60;

    // var showTime = UTC_0 + ':' + thisMinute + ':' + thisSecond;

    console.log(thisDate);
    console.log(thisTime);

    // setTimeout(updateTime, 1000);

    // console.log(UTC_0);
    // console.log(showTime);

    $('.time').text(thisTime);
    $('.date').text(thisDate);
}

var loadTime = function(response){
    if (response.response.error) {
        // alert(response.response.error);
        alert('Please check your input!');
        return;
    };

    // Transfer the "Hour String" into "Number".
    var globalTimeUTC = Number((response.current_observation.local_tz_offset).slice(0, 3).replace(/0/g, ''));

    // console.log(globalTimeUTC);

    updateTime(globalTimeUTC);
}

var loadWeather = function(response){
    if (response.response.error) {
        // alert(response.response.error);
        alert('Please check your input!');
        return;
    };
    // console.log("response=" +JSON.stringify(response));

    var globalCity = response.current_observation.display_location.city;
    var globalState = response.current_observation.display_location.state;
    var globalCountry = response.current_observation.display_location.country_iso3166;
    var globalTemp = response.current_observation.temp_f;
    var globalWeather = response.current_observation.weather;

    if (globalState != '') {
        $('.currentCity').val(globalCity + ', ' + globalState + ', ' + globalCountry);
    }
    else {
        $('.currentCity').val(globalCity + ', ' + globalCountry);
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
        tags: city + ', ' + country + ', skyline',
        tagmode: "all",
        format: "json"
    },

    function(data) {
        $.each(data.items, function(i, item) {
            var flickrPhoto = item.media.m;
            flickrPhoto = flickrPhoto.split("_m.jpg", 1) + "_b.jpg";    // Restructuring the URL to get HQ photo.

            var imageURL = ' url("' + flickrPhoto + '") ';
            $('.images').css("background-image", imageURL);

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
    // city = $('.currentCity').val();
    console.log(city);
    console.log(country);

    if(city == null || city == ''){
        alert('You need to input a city.');
    };
    // state = $('.currentState').val();

    getWeather();
    getPhoto();
};

var init = function(){
    $('#submit').click(function(e){
        e.preventDefault();
        setLocation();
    });
};

$(document).ready(function(){
    init();
    setTimeout(updateTime, 1000);
});
