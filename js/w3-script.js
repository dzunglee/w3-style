$('.toggle-password').on('click', function() {
    $(this).toggleClass('icon-eye');
    let input = $($(this).parent('div').find('input'));
    if (input.attr('type') === 'password') {
        input.attr('type', 'text');
    }
    else {
        input.attr('type', 'password');
    }
});
