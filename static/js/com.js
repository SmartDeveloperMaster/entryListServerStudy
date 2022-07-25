function fade() {
    $('.header').hide()
    $('.button').hide()
    $('.mark').hide()
    $('.ul').hide()

    var pos = 0

    function play() {
        const header = $('.header').eq(pos)
        const button = $('.button').eq(pos)
        const mark = $('.mark').eq(pos)
        const ul = $('.ul').eq(pos)

        header.delay(100).fadeIn(1500)
        button.delay(100).fadeIn(1500)
        mark.delay(100).fadeIn(1500)
        ul.delay(100).fadeIn(1500)
    }
    setTimeout(play)
}

$(document)
    .on('ready', fade)