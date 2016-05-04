/// <reference path="jquery-1.11.0.min.js" />

mLevel = 0;
currLevel = 0;

$(document).ready(function () {
    $('#LeftMenuWrapper li.hasChildren .childLevel').click(function (event) {
        event.preventDefault();
        var t = $(this);
        doClickEvent($, t.parent("div").parent("li").children("a"), "c");
        changeHeader($);
    });
    $('#LeftMenuWrapper').on('click', 'li.lvl0 > a, li.ancestor > a, li.parent > a', function (event) {
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

    if (t.siblings("ul").hasClass("lvl1")) {
        t.siblings("ul").removeClass("selected");
        t.siblings("ul").addClass("menuRoot");
    }
    if (direction == "p") {
        if (t.parent("li").parent("ul").parent("li").hasClass("lvl0")) {
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
    if (c == "lvl0") return;

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
    if (t.hasClass("lvl0")) { mLevel = 0; }
    if (t.hasClass("lvl1")) { mLevel = 1; }
    if (t.hasClass("lvl2")) { mLevel = 2; }
    if (t.hasClass("lvl3")) { mLevel = 3; }
    if (t.hasClass("lvl4")) { mLevel = 4; }
    if (t.hasClass("lvl5")) { mLevel = 5; }
    if (t.hasClass("lvl6")) { mLevel = 6; }
    if (t.hasClass("lvl7")) { mLevel = 7; }
    if (t.hasClass("lvl8")) { mLevel = 8; }
    if (t.hasClass("lvl9")) { mLevel = 9; }
}

function changeHeader($) {
    // fjern alt unntatt root
    $('#LeftMenuWrapper .lvl0Cell.lvl0').removeClass("w100");
    $('#LeftMenuWrapper .lvl0Cell.lvl1').remove();
    $('#LeftMenuWrapper .lvl0Cell.lvl2').remove();
    $('#LeftMenuWrapper .lvl0Cell.lvl3').remove();
    $('#LeftMenuWrapper .lvl0Cell.lvl4').remove();
    $('#LeftMenuWrapper .lvl0Cell.lvl5').remove();
    $('#LeftMenuWrapper .lvl0Cell.lvl6').remove();
    $('#LeftMenuWrapper .lvl0Cell.lvl7').remove();
    $('#LeftMenuWrapper .lvl0Cell.lvl8').remove();
    $('#LeftMenuWrapper .lvl0Cell.lvl9').remove();

    // legg til ihht. selected item
    if ($('#LeftMenuWrapper ul.selected').hasClass("selected")) {
        var t = $('#LeftMenuWrapper ul.selected');
        addHeaderItems($, t, "w100");
    }
    else {
        $('#LeftMenuWrapper .lvl0Cell.lvl0').addClass("w100");
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

    $('#LeftMenuWrapper .lvl0Cell.lvl0').after(html);
    if (mLevel > 1) {
        addHeaderItems($, p.parent("ul"), "");
    }
}