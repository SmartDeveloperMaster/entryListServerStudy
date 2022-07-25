let container = document.getElementsByClassName('container')[0]
window.onload = function() {
    container.style.transform = `translateX(-50%) scale(${document.body.clientHeight / container.clientHeight})`
}
window.onresize = function() {
    container.style.transform = `translateX(-50%) scale(${document.body.clientHeight / container.clientHeight})`
}