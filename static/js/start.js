function img1() {
    const imgs = document.querySelectorAll('.row img');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 1
    }
}

function bk() {
    $('.bk1').hide()
    var tos = 0

    function play() {
        const bk1 = $('.bk1').eq(tos)
        bk1.delay(1450).fadeIn(1000)


    }
    setTimeout(play, 1700)
}

setTimeout(function() {
    const content = "Welcome to\nSeoul\nDigitech\nHigh School";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        if (i < content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt === "\n" ? "<br/>" : txt;
            i++;
            setTimeout(function() {
                typing()
            }, 75);
        }
    }
    typing()
}, 4500)



function btn() {
    $('.button').hide()
    var sos = 0;

    function play() {
        const btn = $('.button').eq(sos)
        btn.delay(5500).fadeIn(1000)
    }
    setTimeout(play, 1700)
}

$(document)
    .on('ready', function() {
        window.scrollTo(0, 0)
        img1()
        bk()
        btn()
    })