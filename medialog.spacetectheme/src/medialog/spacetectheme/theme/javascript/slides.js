$(window).load(function() {

      // Slideshow 1
      $("#slider").responsiveSlides({
        pager: false,
        nav: false,
        speed: $('#slider').attr("data-speed"),
        timeout: $('#slider').attr("data-timeout"),
        maxwidth: 1400,
        namespace: "main"
      });

    });
    
