var level = 1;
    
$(document).ready(function () {

    $('.searchboks a').click(function (event) {
        event.preventDefault();
        $('#modalsearch1').toggleClass('hidden');
    });

    $('a.nextlevel').click(function (event) {
        event.preventDefault();
   		lev = level.toString(); 
        selektor = '.navTreeLevel' + lev + ' li, .navTreeLevel0  li';
        level++;
        $('#somethingleft i').show();
        $(selektor).addClass('hidden');
        $(this).parent().addClass('selected');
        $('.selected, selected > li, li.selected,  .selected > ul > li').removeClass('hidden');
    });

   
    $('#navbuttonLabel label, .closeMenu').click(function () {
        $('#leftMenuOuterWrapper').toggle();
        $("#leftMenuOuterWrapper li").removeClass("hidden")
        $("#leftMenuOuterWrapper li").removeClass("selected");
    });

    $('#somethingleft i').click(function () {
        lev = level.toString(); 
        level = level - 1;
        selektor = '.navTreeLevel' + lev + ' li.hidden';
        $('li').removeClass("hidden")
        $('li').removeClass("selected");
        $('#somethingleft i').hide();
        if (level = 1) { 
            $('#somethingleft i').hide();
        }
    });


});

