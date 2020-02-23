$(document).ready(() => {

    const slide = $('.portfolio-block .item')
    const cursor = $('.cursor-point')
    let mousePos = {
        x: 30,
        y: 30
    }
    let xp =35, yp =35

    sliderOver(slide)

    $(window).on('mousemove', e => {
        mousePos = {
            x: e.clientX,
            y: e.clientY
        }

        cursor.css('top', mousePos.y -2)
        cursor.css('left', mousePos.x -2)
    })

    setInterval(function(){
        xp += ((mousePos.x - xp - 15)/6);
        yp += ((mousePos.y - yp- 15)/6);

        $(".cursor").css({left: xp +'px', top: yp +'px'});
    }, 20)

    $( "#slider" ).slider({
        range: true,
        min: 0,
        max: 24,
        values: [ 0, 24 ],
        slide: function( event, ui ) {
            $( "#amount" ).val(ui.values[ 0 ] + ' : 00' + ' - ' + ui.values[ 1 ] + ' : 00');
        }
    })

    $( "#amount" ).val($( "#slider" ).slider( "values", 0 ) + ' : 00' +" - " + $( "#slider" ).slider( "values", 1 ) + ' : 00' );

    $('.radio-wrap label').on('click', function() {
        $('.radio-wrap label').removeClass('active')
        $(this).addClass('active')
    })

    $('.form-wrapper .close').on('click', function(){
        $('.form-wrapper').removeClass('active')
    })

    $('.callback, .create h2').on('click', function(){
        $('.form-wrapper').addClass('active')
    })

    setTimeout(() => {
        $('.loading-screen').fadeOut(300)
    }, 6000)

    $('.menu-toggle, .main-menu ul li').on('click', function(){
        $('.main-menu').toggleClass('active')
    })
})

$(window).on('scroll', function () {
    $('.callback').css('transform', 'rotate(-' + $(document).scrollTop()/10 +'deg)');
})

sliderOver = (slide) => {
    slide.on('mouseover', function () {
        slide.removeClass('active')
        $(this).addClass('active')
    })
}