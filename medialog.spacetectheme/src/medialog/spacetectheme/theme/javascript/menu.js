
$(document).ready(function () {


    $('a.nextlevel').click(function (event) {
        event.preventDefault();
    });

    $('.navTreeLevel0 a.nextlevel').click(function () {
        $(".navTreeLevel0 > li").addClass("hidden");
        $(this).parent().removeClass("hidden");
        $(this).parent().addClass("selected");
        $(".selected").removeClass("hidden");
    });


    $('.navTreeLevel1 a.nextlevel').click(function () {
        $(".navTreeLevel1 > li").addClass("hidden");
        $(this).parent().removeClass("hidden");
        $(this).parent().addClass("selected");
        $(".selected").removeClass("hidden");
    });

    $('.navTreeLevel2 a.nextlevel').click(function () {
        $(".navTreeLevel2 > li").addClass("hidden");
        $(this).parent().removeClass("hidden");
        $(this).parent().addClass("selected");
        $(".selected").removeClass("hidden");
    });

    $('.navTreeLevel3 a.nextlevel').click(function () {
        $(".navTreeLevel3 > li").addClass("hidden");
        $(this).parent().removeClass("hidden");
        $(".hidden .selected").removeClass("hidden");
        $(this).parent().addClass("selected");
    });
    
    
    $('.navTreeLevel4 a.nextlevel').click(function () {
        $(".navTreeLevel4 > li").addClass("hidden");
        $(this).parent().removeClass("hidden");
        $(".hidden .selected").removeClass("hidden");
        $(this).parent().addClass("selected");
    });


    $('#navbuttonLabel label, .closeMenu').click(function () {
        $('#leftMenuOuterWrapper').toggle();
        $("#leftMenuOuterWrapper li").removeClass("hidden")
        $("#leftMenuOuterWrapper li").removeClass("selected");
    });

    $('#somethingleft i').click(function () {
        $("li.hidden").removeClass("hidden")
        $(".selected").removeClass("selected");
    });


});

