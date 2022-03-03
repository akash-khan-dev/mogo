$(function(){

  //======banner slider part start========//
    $('.banner-main-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false
      });
//======banner slider part end========//
//=======counter-up start======// 
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      $('.counter').addClass('animated fadeInDownBig');
      $('h3').addClass('animated fadeIn');
//=======counter-up end======// 
//=======about-slider part start======// 
    $('.about-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      pauseOnHover:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    });
//=======about-slider part end======// 
//=======comment-slider part start======// 
    $('.main-comment-slaider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:true,
      pauseOnHover:false,
      prevArrow:".left",
      nextArrow:".right",
    });
//=======comment-slider part end======// 
//=======work-slider part start======// 
    $('.work-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      pauseOnHover:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
      
    });
//=======work-slider part end======// 
  // =====sticky menu start=======///
  $(window).scroll(function(){
    var top = $(this).scrollTop()
    if (top > 300) {
      $(".navbar").addClass("sticky-menu")
    }
    else{
     $(".navbar").removeClass("sticky-menu")
    }

  if (top > 400) {
    $("#button").addClass("back-to-top")
  }
  else{
    $("#button").removeClass("back-to-top")
  }
  

  })
   // =====sticky menu end=======///

//=======back to top part start======//
$("#button").click(function(){
  $("html,body").animate({scrollTop:0},1000)
})

//=======back to top part end======// 

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner:'wander'
});


//scroll-spy & Smooth-scrolling
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 35
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 40;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

(function() {

  'use strict';

  document.querySelector('.material-design-hamburger__icon').addEventListener(
    'click',
    function() {      
      var child;
      
      document.body.classList.toggle('background--blur');
      this.parentNode.nextElementSibling.classList.toggle('menu--on');

      child = this.childNodes[1].classList;

      if (child.contains('material-design-hamburger__icon--to-arrow')) {
        child.remove('material-design-hamburger__icon--to-arrow');
        child.add('material-design-hamburger__icon--from-arrow');
      } else {
        child.remove('material-design-hamburger__icon--from-arrow');
        child.add('material-design-hamburger__icon--to-arrow');
      }

    });

})();

})