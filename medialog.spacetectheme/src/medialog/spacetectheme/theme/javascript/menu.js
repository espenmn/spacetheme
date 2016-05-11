var level = 0;
    
$(document).ready(function () {

    $('.searchboks a').click(function (event) {
        event.preventDefault();
        $('#modalsearch1').toggleClass('hidden');
    });

    $('a.nextlevel').click(function (event) {
        event.preventDefault();
   		lev = level.toString(); 
        selektor = '.navTreeLevel' + lev + ' > li';
        level++;
        $('#somethingleft i').show();
        $(selektor).addClass('hidden');
        $(this).parent().removeClass('hidden');
        $(this).parent().addClass('selected');
        $('.selected').removeClass('hidden');
    });

   
    $('#navbuttonLabel label, .closeMenu').click(function () {
        $('#leftMenuOuterWrapper').toggle();
        $("#leftMenuOuterWrapper li").removeClass("hidden")
        $("#leftMenuOuterWrapper li").removeClass("selected");
    });

    $('#somethingleft i').click(function () {
        $("li.hidden").removeClass("hidden")
        $(".selected").removeClass("selected");
        level = level - 1;
        $('#somethingleft i').hide();
        if (level = 1) { 
            $('#somethingleft i').hide();
        }
    });


});

