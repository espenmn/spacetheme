$( document ).ready(function() {
    $("#slider").responsiveSlides({
    maxwidth: 1400,
    maxheight: 450,
    nav: false,
    speed:   $('.mainslider').attr("data-speed"),
    timeout: $('.mainslider').attr("data-timeout"),
    pager: false,
    prevText: "<",  
    nextText: ">",    
    });
	$(".sliderportlet").responsiveSlides({
    maxwidth: 768,
    nav: true,
    speed:   $('.sliderportlet').attr("data-speed"),
    timeout: $('.sliderportlet').attr("data-timeout"),
    pager: false,
    prevText: "<",  
    nextText: ">",    
  
    });
});