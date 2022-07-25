function fade() {
    $('.section').hide()
    var pos = 0

    function play() {
        const section = $('.section').eq(pos)
        section.delay(100).fadeIn(1500)
    }
    setTimeout(play)
}



$(document)
    .on('ready', fade)