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
})