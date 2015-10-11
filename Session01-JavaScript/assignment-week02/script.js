var boxOpacity = false;
var changeBackround = 0;

$('#title').click(function() {
    boxOpacity = !boxOpacity;
    if (boxOpacity) {
        $('.boxes').animate({
            'width' : '0px',
            'opacity' : '0.1'
        }, 1500)

        $('#subtitle').animate({
            'opacity' : '0'
        }, 1000)
    }
    else {
        $('.boxes').animate({
            'width' : '10vw',
            'opacity' : '0.985'
        }, 1500)

        $('#subtitle').animate({
            'opacity' : '1'
        }, 1500)
    }

    changeBackround += 1;

    if (changeBackround % 10 == 1) {
        $('body').css('background-image', 'url(img/1.jpg)');
        document.getElementById("header").innerHTML = 'America';
        document.getElementById("footer").innerHTML =
            'http://wallpaperbeta.com/wallpaper_1600x900/city_america_usa_states_bridges_night_road_1600x900_hd-wallpaper-329748.jpg';
    }
    else if (changeBackround % 10 == 3) {
        $('body').css('background-image', 'url(img/2.jpg)');
        document.getElementById("header").innerHTML = 'Europe';
        document.getElementById("footer").innerHTML =
            'http://3.bp.blogspot.com/-Taz9foTJFfQ/VIOIMDh9VLI/AAAAAAAADWs/GvdOQl7Alsw/s1600/Ohrid%2BMacedonia%2BBalkans%2Beastern%2Beurope%2Bbeaches%2Blandscape.jpg';
    }
    else if (changeBackround % 10 == 5) {
        $('body').css('background-image', 'url(img/3.jpg)');
        document.getElementById("header").innerHTML = 'Asia';
        document.getElementById("footer").innerHTML =
            'https://empoweryourknowledgeandhappytrivia.files.wordpress.com/2015/03/machu-picchu.jpg';
    }
    else if (changeBackround % 10 == 7) {
        $('body').css('background-image', 'url(img/4.jpg)');
        document.getElementById("header").innerHTML = 'Africa';
        document.getElementById("footer").innerHTML =
            'http://1.bp.blogspot.com/-UY-kp7jWCEc/VdUqpt_04XI/AAAAAAAAIeE/ugJBnhWao6Y/s1600/african_landscape_by_dasflon-d5l9t7c5.jpg';
    }
    else if (changeBackround % 10 == 9) {
        $('body').css('background-image', 'url(img/5.jpg)');
        document.getElementById("header").innerHTML = 'Antarctica';
        document.getElementById("footer").innerHTML =
            'http://topwalls.net/wallpapers/2013/05/Antarctica-Mountain-900x1600.jpg';
    }
    else {
        document.getElementById("footer").innerHTML=' ';
    }
    // console.log(changeBackround);
});
