// Like

$ = function(className) {
    return document.querySelectorAll(className)
}

let loop = setInterval(function() {
    const btnLike = $('.QBdPU')[1]
    const btnNext = $('.coreSpriteRightPaginationArrow')[0]
    const textLike = btnLike.getElementsByTagName('svg')[0].getAttribute("aria-label")
    if (!btnLike) {
        btnNext.click()
        return
    }
    if (["Unlike", "Bỏ thích"].includes(textLike)) {
        btnNext.click()
        return
    }
    btnLike.click()
    setTimeout(function() {
        btnNext.click()
    }, 4000)
}, 8000)

// Like & comment

$ = function(className) {
    return document.querySelectorAll(className)
}
let loop = setInterval(function() {
    const btnLike = $('.QBdPU')[1]
    const btnNext = $('.coreSpriteRightPaginationArrow')[0]
    const textLike = btnLike.getElementsByTagName('svg')[0].getAttribute("aria-label")
    const iconBox = $('.X7cDz')[0].getElementsByClassName('wpO6b')[0]
    const btnSubmit = $("button[type=submit]")[0]
    if (!btnLike) {
        btnNext.click()
        return
    }
    if (["Unlike", "Bỏ thích"].includes(textLike)) {
        btnNext.click()
        return
    }
    btnLike.click()
    iconBox.click()
    const arrayIcons = $('.CIwC8')
    arrayIcons[~~(Math.random() * 13)].click()
    btnSubmit.click()
    setTimeout(function() {
        btnNext.click()
    }, 4000)
}, 8000)

// Follow

$ = function(className) {
    return document.querySelectorAll(className)
}
const eventHover = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
})
setInterval(function() {
    const btnNext = $('.coreSpriteRightPaginationArrow')[0]
    const btnFollow = $('button.sqdOP.L3NKy._4pI4F.y3zKF')[1]
    if (!btnNext) return
    $('._6q-tv')[1].dispatchEvent(eventHover)
    setTimeout(function() {
        if (btnFollow.innerHTML !== "Follow") {
            btnNext.click()
            return
        }
        btnFollow.click()
        setTimeout(function() {
            btnNext.click()
        }, 1500)
    }, 1000)
}, 6000)
