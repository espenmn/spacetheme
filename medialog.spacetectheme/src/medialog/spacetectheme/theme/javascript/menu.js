
$(document).ready(function () {

    $('#LeftMenuWrapper .navTreeLevel0 a.contenttype-folder').click(function (event) {
        event.preventDefault();
        $(".navTreeLevel0 > li").addClass("hidden");
        $(this).parent().removeClass("hidden");
        $(this).parent().addClass("selected");
 
    });

    $('#LeftMenuWrapper .navTreeLevel1 a.contenttype-folder').click(function (event) {
        event.preventDefault();
        $(".navTreeLevel1 > li").addClass("hidden");
        $(this).parent().removeClass("hidden");
        $(this).parent().addClass("selected");
        $(".selected").removeClass("hidden");
 
    });

    $('#LeftMenuWrapper .navTreeLevel2 a.contenttype-folder').click(function (event) {
        event.preventDefault();
        $(".navTreeLevel2 > li").addClass("hidden");
        $(this).parent().removeClass("hidden");
        $(this).parent().addClass("selected");
        $(".selected").removeClass("hidden");
    });

    $('#LeftMenuWrapper .navTreeLevel3 a.contenttype-folder').click(function (event) {
        event.preventDefault();
        $(".navTreeLevel3 > li").addClass("hidden");
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

