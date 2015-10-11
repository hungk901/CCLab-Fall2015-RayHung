//  WHEN MOUSE ENTER, DO "ANIMATION PULSE".
$('.triangle').mouseenter(function() {
    $(this).addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated pulse');
    });
});

//  SET ANIMATIONS TO EACH TRIANGLE WNEH CLICK BUTTONS
var thisMove;
var upTriangle, downTriangle, leftTriangle, rightTriangle;
$('#bounce').click(function() {
    upTriangle = "bounceInUp";
    downTriangle = "bounceInDown";
    leftTriangle = "bounceInRight";
    rightTriangle = "bounceInLeft";
    thisMove = $(this);
    selectLight(thisMove);

});
$('#fade').click(function() {
    upTriangle = "fadeOutUp";
    downTriangle = "fadeOutDown";
    leftTriangle = "fadeOutLeft";
    rightTriangle = "fadeOutRight";
    thisMove = $(this);
    selectLight(thisMove);
});
$('#slide').click(function() {
    upTriangle = "slideInUp";
    downTriangle = "slideInDown";
    leftTriangle = "slideInRight";
    rightTriangle = "slideInLeft";
    thisMove = $(this);
    selectLight(thisMove);
});
$('#zoom').click(function() {
    upTriangle = "zoomOutUp";
    downTriangle = "zoomOutDown";
    leftTriangle = "zoomOutLeft";
    rightTriangle = "zoomOutRight";
    thisMove = $(this);
    selectLight(thisMove);
});

//  DO ANIMATIONS.
var thisTri;
$('#up').click(function() {
    thisTri = $(this);
    animation(thisTri, upTriangle);
});
$('#down').click(function() {
    thisTri = $(this);
    animation(thisTri, downTriangle);
});
$('#left').click(function() {
    thisTri = $(this);
    animation(thisTri, leftTriangle);
});
$('#right').click(function() {
    thisTri = $(this);
    animation(thisTri, rightTriangle);
});

//  ANIMATION FUNCTION.
var animation = function(thisTri, move) {
    thisTri.addClass('animated ' + move).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass().addClass('triangle');
    });
    //console.log(move);
};

// BRIGHT THE SELECTION BAR
var selectLight = function(thisMove) {
    $('.selection').css('background-color', 'rgba(125, 125, 125, 0.6)');
    thisMove.css('background-color', 'rgba(225, 225, 225, 0.6)');
};

// RANDOM COLOR FUNCTION.
// function randomTriangleColor(randomColor) {
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     return randomColor;
// };
    // $('#up').click(function() {
    //     var randomColor = randomTriangleColor();
    //     $(this).css({
    //         borderBottomColor: '#' + randomColor
    //     });
    // });
    // $('#down').click(function() {
    //     var randomColor = randomTriangleColor();
    //     $(this).css({
    //         borderTopColor: '#' + randomColor
    //     });
    // });

    // $('#left').click(function() {
    //     var randomColor = randomTriangleColor();
    //     $(this).css({
    //         borderRightColor: '#' + randomColor
    //     });
    // });
    // $('#right').click(function() {
    //     var randomColor = randomTriangleColor();
    //     $(this).css({
    //         borderLeftColor: '#' + randomColor
    //     });
    // });

