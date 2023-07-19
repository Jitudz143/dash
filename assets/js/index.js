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
    // setTimeout(() => {
    //     $('.alert').removeClass('show');
    // }, 5000);

    // $('.alert').addClass('show');
    
    function showNotification(msg, type=0, autoHide = false) {
        let msgType = type > 0? 'alert-warning':'alert-success';
        let msg1 = type > 0? '<strong>Error!</strong> ':'<strong>Success!</strong> ';
        $('.alert').addClass('show');
        $('.alert').addClass(msgType);
        $('#alert-message').html(msg1+msg);

        if (autoHide) {
            setTimeout(() => {
                $('.alert').removeClass('show');
            }, 5000);
        }
    }
    showNotification('You should check in on some of those fields below.',0,true)
})
