$(document).ready(function () {
    var isScaled=600;

    if($(window).width()<isScaled){





    $("#menuBar").click(function () {




     $("#menu").toggle().find("a.menus").css({
         "background":"red",
         "display":"block",
         "color":"CACACA",
         "float":"non",
         "font-weight":"bold"


     });





    }).css({
        "background":"red",
        "display":"absolute",
        "top":"0",
        "left":"0"
    });

    }
    $("#menu").find("a#innerMenus").click(function () {








    })



});