$( document ).ready(function() {
    $("#slider").responsiveSlides({
    maxwidth: 1400,
    nav: false,
    speed:   $(this).attr("data-speed"),
    timeout: $(this).attr("data-timeout"),
    pager: false, 
    });
    $(".sliderportlet").responsiveSlides({
    maxwidth: 768,
    nav: true,
    speed:   $(this).attr("data-speed"),
    timeout: $(this).attr("data-timeout"),
    pager: false,
    prevText: "<",  
    nextText: ">",    
    });
});