$(document).ready(function() {
    $("#btn-modal").click(function() {
        $("#fs-modal").toggle(800)
    })
})

$(document).ready(function() {
    $("#cart-btn").click(function () {
        $("#fs-modal").toggle(500)
    })
})

$(document).ready(function() {
    $("#menu").click(function() {
        $("#menubar").toggle(800)
    })
})

// Scroll Effects

window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 1000,
    origin: 'left',
    distance: '100%'
});

sr.reveal('#blog-1-left', {
    duration: 2000,
    origin: 'left',
    distance: '50%'
})

sr.reveal('#blog-1-right', {
    duration: 2000,
    origin: 'right',
    distance: '50%'
})

sr.reveal('#btn-touch', {
    duration: 3000,
    origin: 'bottom',
    distance: '100%',
    vue: 0.2
})

sr.reveal('#about', {
    duration: 2000,
    origin: 'bottom',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#features-left', {
    duration: 2000,
    origin: 'left',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#features-left1', {
    duration: 2000,
    origin: 'left',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#features-right', {
    duration: 2000,
    origin: 'right',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#features-right2', {
    duration: 2000,
    origin: 'right',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#proj-1', {
    duration: 2000,
    origin: 'left',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#proj-2', {
    duration: 2000,
    origin: 'right',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#awards-left', {
    duration: 2000,
    origin: 'top',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#awards-right', {
    duration: 2000,
    origin: 'bottom',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#pricing', {
    duration: 2000,
    origin: 'bottom',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#left-testimony', {
    duration: 2000,
    origin: 'left',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#right-testimony', {
    duration: 2000,
    origin: 'right',
    distance: '50%',
    vue: 0.2
})