$('.toggle-password').on('click', function () {
    $(this).toggleClass('icon-eye');
    let input = $($(this).parent('div').find('input'));
    if (input.attr('type') === 'password') {
        input.attr('type', 'text');
    } else {
        input.attr('type', 'password');
    }
});

$( document ).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.w3 header').addClass('fixed');
            $('.sub-logo').addClass('fixed');
        } else {
            $('.w3 header').removeClass('fixed');
            $('.sub-logo').removeClass('fixed');
        }
    });

    new Vivus('logo-svg', { duration: 20, file: $('#logo-svg').data('path') }, function () {
        console.log('rendered')
    });
});