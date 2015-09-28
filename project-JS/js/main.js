
var city = '';
var state = '';
var country = '';
var APIKey = '6f206707a93aceba';

var loadWeather = function(response){
    if (response.response.error) {
        // alert(response.response.error);
        alert('Please check your input!');
        return;
    };
    // console.log("response=" +JSON.stringify(response));


    var thisCity = response.current_observation.display_location.city;
    var thisState = response.current_observation.display_location.state;
    var thisCountry = response.current_observation.display_location.country_iso3166;
    var thisTemp = response.current_observation.temp_f;
    var thisWeather = response.current_observation.weather;
    var thisTime = response.current_observation.local_time_rfc822;

    var thisTimeArray = [];
    thisTimeArray = thisTime.split(" ", 5);

    // for (var i = 0; i < thisTimeArray.length; i++) {
    //     console.log(thisTimeArray[i]);
    // };

    var showDate = thisTimeArray[0] + ' ' + thisTimeArray[2] + ' ' + thisTimeArray[1] + ', ' + thisTimeArray[3];
    var showTime = thisTimeArray[4];

     // console.log(showDate);
     // console.log(thisCity);
     // console.log(thisTemp);
     // console.log(thisWeather);
     // console.log(thisTime);

     $('.date').text(showDate);
     $('.time').text(showTime);

     if (thisState != '') {
        $('.currentCity').val(thisCity + ', ' + thisState + ', ' + thisCountry);
     }
     else {
        $('.currentCity').val(thisCity + ', ' + thisCountry);
     };

     $('.temperature').text(thisTemp);
     $('.weather').text(thisWeather);
};

var getWeather = function(){
    var weatherAPI = 'http://api.wunderground.com/api/'+ APIKey + '/conditions/q/' + country + '/' + city + '.json';

    $.ajax({
        url : weatherAPI,
        dataType : 'jsonp',
        success : function(response){
            loadWeather(response);
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
            flickrPhoto = flickrPhoto.split("_m.jpg", 1) + "_h.jpg";    // Restructuring the URL to get HQ photo.
            // console.log(flickrPhoto);

            var imageURL = ' url("' + flickrPhoto + '") ';
            $('.images').css("background-image", imageURL);

            // console.log(imageURL);
            if (i === 0) {
                return false;
            };
        });
    });
};

var setLocation = function(){

    var locationArray = [];
    locationArray = $('.currentCity').val().split(",")

    city = locationArray[0];
    country = locationArray[1];
    // city = $('.currentCity').val();
    console.log(city);
    console.log(country);

    if(city == null || city == ''){
        alert('You need to input a city.');
    };
    // state = $('.currentState').val();
    // console.log('We want the weather date for ' + city + ' / ' + state);
    // console.log('We want the weather date for ' + city);

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
});
