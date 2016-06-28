$(function () {
    $("#slider").responsiveSlides({
    maxwidth: 1400,
    maxheight: 450,
    nav: false,
    speed:   $('this').attr("data-speed"),
    timeout: $('this').attr("data-timeout"),
    pager: false,
    prevText: "<",  
    nextText: ">",    
    });
	$(".sliderportlet").responsiveSlides({
    maxwidth: 768,
    nav: true,
    speed:   $('this').attr("data-speed"),
    timeout: $('this').attr("data-timeout"),
    pager: false,
    prevText: "<",  
    nextText: ">",    
  
    });
});