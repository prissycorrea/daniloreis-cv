function active() {
var link = $('.menu__superior--link')
    link.on("click", function() {
        link.removeClass("active")
        $(this).addClass("active")
    })
}