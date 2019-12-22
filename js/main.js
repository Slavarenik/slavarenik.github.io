$(document).ready(() => {
    $('header .toggle').on('click', function(){
        $(this).toggleClass('close')
        $('header').toggleClass('active')
    })
})