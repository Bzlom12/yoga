$(document).ready(function() {
    console.log('a');
    $('.main_btna, .main_btn, li:nth-child(2)').on('click', function() {
        console.log('hi');
        $('.overlay').animate({
            opacity: "toggle",
            display: 'block'
            }, 2000
        );
        $('.modal').slideDown(2000);
    });

    $('.close').on('click', function() {
        $('.overlay').animate({
            opacity: "toggle",
            display: 'none'
            }, 2000
        );
        $('.modal').slideUp(2000);
    });
   
});