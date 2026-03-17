/* ------------------ AOS Animation -----------------*/
AOS.init();

/* ------------------ Client Slider -----------------*/
$(document).ready(function(){
    $('.partner-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
  });

/* ------------------ Client Slider -----------------*/
$(document).ready(function(){
  $('.client-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });
});

/* ------------------ Project Counter -----------------*/
$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 1021,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 8,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});


/* ------------------ Accordian Tabs -----------------*/
  $(".accor-box").click(function (e) {
    e.preventDefault();
    var currentIsActive = $(this).hasClass("is-active");
    $(this).parent(".accordion").find("> *").removeClass("is-active");
    if (currentIsActive != 1) {
        $(this).addClass("is-active");
        $(this).next(".accordion-body").addClass("is-active");
    }
});

/* ------------------ Scroll to top -----------------*/
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


/* ------------------ ProgressBar -----------------*/

function loading() {
  document.querySelectorAll(".bar").forEach(function(current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;
    
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
     }
  });
}

setTimeout(loading, 1000);

/* ------------------ Header Footer Active Class -----------------*/
 
jQuery(function($) {
  var path = window.location.href;
  $('.header .navbar-nav li a').each(function() {
   if (this.href === path) {
    $(this).addClass('select');
   }
  });
 });

 jQuery(function($) {
  var path = window.location.href;
  $('.footer-menu ul li a').each(function() {
   if (this.href === path) {
    $(this).addClass('select');
   }
  });
 });

/* ------------------ Scroll To Relative Section -----------------*/

$(".menu a[href^='#']").on("click", function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $("html, body").animate({
    "scrollTop": $target.offset().top
  }, 1000, "swing");
});


