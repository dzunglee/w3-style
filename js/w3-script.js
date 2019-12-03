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
    try {
        new Vivus('logo-svg', {duration: 20, file: $('#logo-svg').data('path')}, function () {
            console.log('rendered')
        });
    }
    catch (e) {
        console.log("!1")
    }
});
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
$(document).ready(function(){
    $('[data-toggle="popoverLight"]').popover({
        html : true,
        template : '<div class="popover popover-light" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
});
$(document).ready(function () {
    console.log("11");
})
$(document).ready(function() {
    $("#state").select2({
        tags: true
    });

    $("#stateMulti").select2({
        tags: true
    })
});

