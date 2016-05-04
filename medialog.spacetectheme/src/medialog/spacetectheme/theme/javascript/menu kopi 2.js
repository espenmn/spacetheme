/// <reference path="jquery-1.11.0.min.js" />

mLevel = 0;
currLevel = 0;

$(document).ready(function () {
    $('#LeftMenuWrapper li.contenttype-folder ul').click(function (event) {
        event.preventDefault();
        var t = $(this);
        doClickEvent($, t.parent("div").parent("li").children("a"), "c");
        changeHeader($);
    });
    $('#LeftMenuWrapper').on('click', 'li.navTreeLevel0 > a, li.ancestor > a, li.parent > a', function (event) {
        event.preventDefault();
        var t = $(this);
        doClickEvent($, t, "p");
        changeHeader($);
    });
    $('label[for="LeftMenuCheckbox"]').click(function () {
        $('#leftMenuOuterWrapper').css("height", $(document).height()+"px");
    });

    // Cookie Info script (May be placed in any global .js)
    $(".cookieHide").on("click", function () {
        document.cookie = "HideCookieInfo=true; expires=expires=Fri, 31 Dec 9999 23:59:59 GMT; max-age=315360000; path=/";
        $("#lblCookieInfo").remove();
    });
});


function doClickEvent($, t, direction) {
    getLevel($, t.parent("li"));
    currLevel = mLevel;
    changeParents($, t);
    t.parent().find('*').removeClass("selected parent ancestor menuRoot");
    if (direction == "c") t.siblings("ul").addClass("selected");

    if (t.siblings("ul").hasClass("navTreeLevel1")) {
        t.siblings("ul").removeClass("selected");
        t.siblings("ul").addClass("menuRoot");
    }
    if (direction == "p") {
        if (t.parent("li").parent("ul").parent("li").hasClass("navTreeLevel0")) {
            t.parent().find('*').removeClass("selected parent ancestor menuRoot");
            t.parent("li").removeClass("selected parent ancestor menuRoot");
            t.parent("li").parent("ul").removeClass("selected parent ancestor menuRoot");
            t.parent("li").parent("ul").addClass("menuRoot");
        }
        if (currLevel > 1) {
            //doClickEvent($, t.parent("li").parent("ul").parent("li").children("a"), "c");
            var p2 = t.parent("li").parent("ul").parent("li").children("a");
            getLevel($, p2.parent("li"));
            currLevel = mLevel;
            changeParents($, p2);
            p2.parent().find('*').removeClass("selected parent ancestor menuRoot");
            p2.siblings("ul").addClass("selected");
        }
    }
}

function changeParents($, t) {
    var p = t.parent();
    var c = p.attr("class");
    if (c == "navTreeLevel0") return;

    getLevel($, p);
    var diff = currLevel - mLevel;

    //rydd først
    p.removeClass("selected parent ancestor menuRoot");

    //legg på rett klasse
    if (diff == 0) { p.addClass("parent") }
    if (diff >= 1) { p.addClass("ancestor") }

    changeParents($, p);
}

function getLevel($, t) {
    if (t.hasClass("navTreeLevel0")) { mLevel = 0; }
    if (t.hasClass("navTreeLevel1")) { mLevel = 1; }
    if (t.hasClass("navTreeLevel2")) { mLevel = 2; }
    if (t.hasClass("navTreeLevel3")) { mLevel = 3; }
    if (t.hasClass("navTreeLevel4")) { mLevel = 4; }
    if (t.hasClass("navTreeLevel5")) { mLevel = 5; }

}

function changeHeader($) {
    // fjern alt unntatt root
    $('#LeftMenuWrapper .navTreeLevel0').removeClass("w100");
    $('#LeftMenuWrapper .navTreeLevel1').remove();
    $('#LeftMenuWrapper .navTreeLevel2').remove();
    $('#LeftMenuWrapper .navTreeLevel3').remove();
    $('#LeftMenuWrapper .navTreeLevel4').remove();
    $('#LeftMenuWrapper .navTreeLevel5').remove();
    $('#LeftMenuWrapper .navTreeLevel6').remove();


    // legg til ihht. selected item
    if ($('#LeftMenuWrapper ul.selected').hasClass("selected")) {
        var t = $('#LeftMenuWrapper ul.selected');
        addHeaderItems($, t, "w100");
    }
    else {
        $('#LeftMenuWrapper .navTreeLevel0').addClass("w100");
    }
}
function addHeaderItems($, t, w) {
    var p = t.parent("li");
    getLevel($, p);
    var title = p.children("a").attr("title");
    var href = p.children("a").attr("href");
    var html = "<div class=\"lvl0Cell lvl" + mLevel + " " + w + "\">";
    html += "<a href=\"" + href + "\" title=\"" + title + "\" >";
    html += "<div class=\"mltWrap\"><div class=\"menulinktext\">" + title + "</div></div>";
    html += "</a>";
    html += "</div>";

    $('#LeftMenuWrapper 	'.navTreeLevel0').after(html);
    if (mLevel > 1) {
        addHeaderItems($, p.parent("ul"), "");
    }
}