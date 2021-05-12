<<<<<<< HEAD
=======
// Animating login div
let pages = ['#login-page','#feed-page','#profile-page']
>>>>>>> 573b1e93d2f867a2ecc53e7b8ad45ac359bd18d2
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
<<<<<<< HEAD
});
=======
});

>>>>>>> 573b1e93d2f867a2ecc53e7b8ad45ac359bd18d2
