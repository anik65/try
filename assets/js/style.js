
//  sticky nav
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
        $("nav").addClass("fixed-top");
    } else {
        $("nav").removeClass("fixed-top");
    }
});


$(window).on('load',function () {
    $(".site-preloader-wrap").fadeOut();
});

$('body').scrollspy({ target: ".nav", offset: 30 });

$(".navbar-toggler").on("click", function () {
    $(".home-text").toggleClass("index");
});

$('.carousel').carousel({
    interval: 3000
});

//counter
$('.count').counterUp({
    delay: 10,
    time: 1500
});
$('.bxslider').bxSlider({
    controls: false,
    auto: true,

});
var config = document.querySelector(".container-one");
var mixer = mixitup(config);

var config1 = document.querySelector(".mix-container");
var mixer1 = mixitup(config1);

new WOW().init();



$(window).scroll(function () {
    $('.skill-bar').each(function (index, value) {

        if (
            $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
        ) {
            var x = 0;
            var animaton = setInterval(animated, 10);
            function animated() {
                x++;
                document.querySelector(".skill1").style.width = x + "%";
                document.querySelector(".skill2").style.width = x + "%";
                document.querySelector(".skill3").style.width = x + "%";
                if (x >= 80) {
                    clearInterval(animaton);
                }
            }

        }
    });
}).trigger('scroll');

