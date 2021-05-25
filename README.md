# Tool-Instagram

# Like, comment

$ = function(className) {
    return document.querySelectorAll(className)
}
setInterval(function() {
    if ($('.QBdPU')[1].getElementsByTagName('svg')[0].getAttribute("aria-label") === "Unlike") {
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
    document.getElementsByClassName('_6q-tv')[1].dispatchEvent(event)
    if ($('button.sqdOP.L3NKy._4pI4F.y3zKF')[1].innerHTML !== "Follow") {
        $('.coreSpriteRightPaginationArrow')[0].click()
        return
    }
    document.querySelectorAll('button.sqdOP.L3NKy._4pI4F.y3zKF')[1].click()
    setTimeout(function() {
        $('.coreSpriteRightPaginationArrow')[0].click()
    }, 2500)
}, 6000)
