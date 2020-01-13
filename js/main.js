$(document).ready(() => {
    $('.menu-toggle').on('click', function(){
        $(this).toggleClass('active')
        $('.menu').toggleClass('active')
    })
})