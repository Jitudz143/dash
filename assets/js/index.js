$(document).ready(function () {
    'use-strict'
    $(document).on('click', '.nav_link', (e) => {
        $(e.currentTarget.nextElementSibling).slideToggle();
        $(e.currentTarget).toggleClass('rotate');
    })


    $(document).on('click', '#toggle', () => {
        $('#target').toggleClass('show_sidebar')
        $('.nav ,.sidebar_header').toggleClass('d-none')
    })

    // Call this to close alert
    // $('.alert').alert('close');
    
    $('#close-alert').click(function(){
        $('.alert').removeClass('show');
    })
    setTimeout(() => {
        $('.alert').removeClass('show');
    }, 5000);

    $('.alert').addClass('show');
})
