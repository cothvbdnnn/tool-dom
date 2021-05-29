# Tool Instagram

# Like

$ = function(className) {
    return document.querySelectorAll(className)
}
setInterval(function() {
    if (!$('.coreSpriteRightPaginationArrow')[0]) return
    if (["Unlike", "Bỏ thích"].includes($('.QBdPU')[1].getElementsByTagName('svg')[0].getAttribute("aria-label"))) {
        $('.coreSpriteRightPaginationArrow')[0].click()
        return
    }
    $('.QBdPU')[1].click()
    setTimeout(function() {
        $('.coreSpriteRightPaginationArrow')[0].click()
    }, 5000)
}, 10000)

# Like and comment

$ = function(className) {
    return document.querySelectorAll(className)
}
setInterval(function() {
    if (!$('.coreSpriteRightPaginationArrow')[0]) return
    if (["Unlike", "Bỏ thích"].includes($('.QBdPU')[1].getElementsByTagName('svg')[0].getAttribute("aria-label"))){
        $('.coreSpriteRightPaginationArrow')[0].click()
        return
    }
    $('.QBdPU')[1].click()
    $('.X7cDz')[0].getElementsByClassName('wpO6b')[0].click()
    $('.CIwC8')[~~(Math.random() * 13)].click()
    $("button[type=submit]")[0].click()
    setTimeout(function() {
        $('.coreSpriteRightPaginationArrow')[0].click()
    }, 2500)
}, 6000)

# Follow

$ = function(className) {
    return document.querySelectorAll(className)
}
const event = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
})
setInterval(function() {
    if (!$('.coreSpriteRightPaginationArrow')[0]) return
    document.getElementsByClassName('_6q-tv')[1].dispatchEvent(event)
    setTimeout(function() {
        if ($('button.sqdOP.L3NKy._4pI4F.y3zKF')[1].innerHTML !== "Follow") {
            $('.coreSpriteRightPaginationArrow')[0].click()
            return
        }
        $('button.sqdOP.L3NKy._4pI4F.y3zKF')[1].click()
        setTimeout(function() {
            $('.coreSpriteRightPaginationArrow')[0].click()
        }, 1500)
    }, 1000)
}, 6000)
