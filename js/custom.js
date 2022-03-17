window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// MOBILE MENU 

document.querySelector(".mobile-menu").addEventListener("click", function(){
    document.querySelector('.menu').classList.toggle('show');
})
// SKILL BAR JQUERY

    $(function(){
        2
        3
    $('.circlechart').circlechart();
        4
        5
    });

    // OWL carusel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })

