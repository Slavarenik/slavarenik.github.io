$(document).ready(function(){
    let count = 1

    $('.show-all .btn').on('click', function(e){
        e.preventDefault();
        $('.hidden-list').css('display', 'flex').show()
    })

    $('.item .up').on('click', function(){
        changeInputVal($(this), 'increment')
    })

    $('.item .down').on('click', function(){
        changeInputVal($(this), 'decrement')
    })

    function changeInputVal(el, action){
        if(action === 'increment'){
            count < 99 ? count++ : count
        } else if (action === 'decrement'){
            count > 1 ? count-- : count
        }

        el.parent().find('input[type=number]').val(count)
    }
})