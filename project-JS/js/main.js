
var city = '';
var state = '';
var country = '';
var APIKey = '6f206707a93aceba';
var UTC;
var globalTimeUTC = [moment().format('ZZ')];

var updateTime = function(globalTimeUTC){
    UTC = globalTimeUTC[0];
    // UTC = -4;

    // console.log(globalTimeUTC);

    var thisTime = moment().utcOffset(UTC).format('HH:mm:ss');
    var thisDate = moment().utcOffset(UTC).format('ddd, MMM DD, YYYY')

    // console.log(thisDate);
    // console.log(thisTime);

    $('.time').text(thisTime);
    $('.date').text(thisDate);

    // setTimeout(updateTime, 1000);
    // setTimeout(plus, 1000);
}

var loadTime = function(response){
    if (response.response.error) {
        // alert(response.response.error);
        alert('Please check your input!');
        return;
    };
    // Transfer the "Hour String" into "Number".
    // var globalTimeUTC = Number(moment().format('ZZ'));

    globalTimeUTC.unshift(response.current_observation.local_tz_offset);
    updateTime(globalTimeUTC);

    // console.log(globalTimeUTC);
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
        // $('.currentCity').val(globalCity + ', ' + globalState + ', ' + globalCountry);
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
            $('.images').css("background-image", imageURL);

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
        e.preventDefault();
        setLocation();
    });
};

var autoFillTags = function(){
    var availableTags = [
        "Beijing, Beijing",
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
    setTimeout(updateTime(globalTimeUTC), 1000);
});
