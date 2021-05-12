// Animating login div
let pages = ['#login-page','#feed-page','#profile-page']
let fadeOutTime = 300;
let fadeInTime = 1500;
$(document).ready(function () {
    $('#feed-page').hide();
    $('#login-page').show();
    $('#profile-page').hide();
    $('.login-button').click(function () {
            $('#login-page').fadeOut(fadeOutTime);
            $('#feed-page').fadeIn(fadeInTime);
    });
    $('.profile').click(function(){
        $('#login-page').fadeOut(fadeOutTime);
        $('#feed-page').fadeOut(fadeOutTime);
        $('#profile-page').fadeIn(fadeInTime);
    });
    $('.home').click(function(){
        $('#login-page').fadeOut(fadeOutTime);
        $('#feed-page').fadeIn(fadeInTime);
        $('#profile-page').fadeOut(fadeOutTime);
    });
});

