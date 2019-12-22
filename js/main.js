$(document).ready(() => {
    var vid = document.getElementById("video");

    $('header .toggle').on('click', function(){
        $(this).toggleClass('close')
        $('header').toggleClass('active')
    })

    vid.play()
})