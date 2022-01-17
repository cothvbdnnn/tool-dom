// L

$ = function(className) {
    return document.querySelectorAll(className)
}
let loop = setInterval(function() {
    const btnLike = $('.QBdPU')[5]
    const btnNext = $('.QBdPU')[3]
    const textLike = btnLike?.getElementsByTagName('svg')[0].getAttribute("aria-label")
    if (!btnLike || ["Unlike", "Bỏ thích"].includes(textLike)) {
        btnNext && btnNext.click()
        return
    }
    btnLike.click()
    setTimeout(function() {
        btnNext.click()
    }, 4000)
}, 8000)

// C

$ = function(className) {
    return document.querySelectorAll(className)
}
let loop = setInterval(function() {
    const btnLike = $('.QBdPU')[5]
    const btnNext = $('.QBdPU')[3]
    const textLike = btnLike?.getElementsByTagName('svg')[0].getAttribute("aria-label")
    if (!btnLike || ["Unlike", "Bỏ thích"].includes(textLike)) {
        btnNext && btnNext.click()
        return
    }
    btnLike.click()
    const iconBox = $('.X7cDz')[0].getElementsByClassName('wpO6b')[0]
    iconBox.click()
    const arrayIcons = $('.CIwC8')
    arrayIcons[~~(Math.random() * 13)].click()
    const btnSubmit = $("button[type=submit]")[0]
    btnSubmit.click()
    setTimeout(function() {
        btnNext.click()
    }, 4000)
}, 8000)

// F

$ = function(className) {
    return document.querySelectorAll(className)
}
const eventHover = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
})
let loop = setInterval(function() {
    const btnNext = $('.QBdPU')[3]
    if (!btnNext) return
    $('._6q-tv')[1].dispatchEvent(eventHover)
    setTimeout(function() {
        const btnFollow = $('button.sqdOP.L3NKy._4pI4F.y3zKF')[1]
        if (!btnFollow || !["Follow", "Theo dõi"].includes(btnFollow.innerHTML)) {
            btnNext && btnNext.click()
            return
        }
        btnFollow.click()
        setTimeout(function() {
            btnNext.click()
        }, 1500)
    }, 1000)
}, 6000)
