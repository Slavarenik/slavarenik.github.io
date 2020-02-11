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

        console.log(xp)

        $(".cursor").css({left: xp +'px', top: yp +'px'});
    }, 20)
})

sliderOver = (slide) => {
    slide.on('mouseover', function () {
        slide.removeClass('active')
        $(this).addClass('active')
    })
}