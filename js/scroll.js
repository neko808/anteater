
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add('minum');
    document.getElementById("header").classList.add('water');
    document.getElementById("header").classList.add('basic');
    document.getElementById("header").classList.add('fondo');
    console.log('scroll')
  } else {
    document.getElementById("header").classList.remove('minum');
    document.getElementById("header").classList.remove('water');
    document.getElementById("header").classList.remove('basic');
    document.getElementById("header").classList.remove('fondo');
  }
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
    //if (st > lastScrollTop && st > navbarHeight){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        // Scroll Down
        // $('header').removeClass('nav-down').addClass('nav-up');
        $('header').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            // $('header').removeClass('nav-up').addClass('nav-down');
            $('header').removeClass('nav-up');
        }
    }
    
    lastScrollTop = st;

}

