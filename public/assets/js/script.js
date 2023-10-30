(function($) {
    "use strict";
    $(".mobile-toggle").on('click',function(){
        $(".nav-menus").toggleClass("open");
    });
    $(".mobile-toggle-left").on('click',function(){
        $(".left-header").toggleClass("open");
    });
    $(".mobile-search").on('click',function(){
       $(".form-control-plaintext").toggleClass("open");
   });
    $(".bookmark-search").on('click',function(){
        $(".form-control-search").toggleClass("open");
    })
    $(".filter-toggle").on('click',function(){
        $(".product-sidebar").toggleClass("open");
    });
    $(".toggle-data").on('click',function(){
        $(".product-wrapper").toggleClass("sidebaron");
    });
    $(".form-control-search").on('keyup',function(e){
        if(e.target.value) {
            $(".page-wrapper.horizontal-wrapper").addClass("offcanvas-bookmark");
        } else {
            $(".page-wrapper.horizontal-wrapper").removeClass("offcanvas-bookmark");
        }
    });
})(jQuery);

$('.loader-wrapper').fadeOut('slow', function() {
    "use strict";
    $(this).remove();
});

$(window).on('scroll', function() {
    "use strict";
    if ($(this).scrollTop() > 600) {
        $('.tap-top').fadeIn();
    } else {
        $('.tap-top').fadeOut();
    }
});

$('.media-size-email svg').on('click', function (e) {
    "use strict";
    $(this).toggleClass("like");
});


$('.tap-top').on('click',function() {
    "use strict";
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
(function($, window, document, undefined) {
    "use strict";
    var $ripple = $(".js-ripple");
    $ripple.on("click.ui.ripple", function(e) {
        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find(".c-ripple__circle");
        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;
        $circle.css({
            top: y + "px",
            left: x + "px"
        });
        $this.addClass("is-active");
    });
    $ripple.on(
        "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
        function(e) {
            $(this).removeClass("is-active");
        });
})(jQuery, window, document);


// active link
$(".chat-menu-icons .toogle-bar").on('click',function(){
    "use strict";
    $(".chat-menu").toggleClass("show");
});


// Language
var tnum = 'en';
$(function() {
    "use strict";
    if (localStorage.getItem("primary") != null) {
        var primary_val = localStorage.getItem("primary");
        $("#ColorPicker1").val(primary_val);
        var secondary_val = localStorage.getItem("secondary");
        $("#ColorPicker2").val(secondary_val);
    }
    $(document).on('click',function (e) {
        $('.translate_wrapper, .more_lang').removeClass('active');
    });
    $('.translate_wrapper .current_lang').on('click',function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active');

        setTimeout(function () {
            $('.more_lang').toggleClass('active');
        }, 5);
    });

    /*TRANSLATE*/
    translate(tnum);

    $('.more_lang .lang').on('click',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active');

        var i = $(this).find('i').attr('class');
        var lang = $(this).attr('data-value');
        var tnum = lang;
        translate(tnum);

        $('.current_lang .lang-txt').text(lang);
        $('.current_lang i').attr('class', i);


    });
});

function translate(tnum) {
    $('.lan-1').text(trans[0][tnum]);
    $('.lan-2').text(trans[1][tnum]);
    $('.lan-3').text(trans[2][tnum]);
    $('.lan-4').text(trans[3][tnum]);
    $('.lan-5').text(trans[4][tnum]);
    $('.lan-6').text(trans[5][tnum]);
    $('.lan-7').text(trans[6][tnum]);
    $('.lan-8').text(trans[7][tnum]);
    $('.lan-9').text(trans[8][tnum]);
}

var trans = [{
        en: 'General',
        pt: 'Geral',
        es: 'Generalo',
        fr: 'GÃƒÂ©nÃƒÂ©rale',
        de: 'Generel',
        cn: 'Ã¤Â¸â‚¬Ã¨Ë†Â¬',
        ae: 'Ã˜Â­Ã˜Â¬Ã™â€ Ã˜Â±Ã˜Â§Ã™â€ž Ã™â€žÃ™Ë†Ã˜Â§Ã˜Â¡'
    }, {
        en: 'Dashboards,widgets & layout.',
        pt: 'PainÃƒÂ©is, widgets e layout.',
        es: 'Paneloj, fenestraÃ„Âµoj kaj aranÃ„Âo.',
        fr: "Tableaux de bord, widgets et mise en page.",
        de: 'Dashboards, widgets en lay-out.',
        cn: 'Ã¤Â»ÂªÃ¨Â¡Â¨Ã¦ÂÂ¿Ã¯Â¼Å’Ã¥Â°ÂÃ¥Â·Â¥Ã¥â€¦Â·Ã¥â€™Å’Ã¥Â¸Æ’Ã¥Â±â‚¬Ã£â‚¬â€š',
        ae: 'Ã™â€žÃ™Ë†Ã˜Â­Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â¯Ã™Ë†Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â®Ã˜Â·Ã™Å Ã˜Â·.'
    }, {
        en: 'Dashboards',
        pt: 'PainÃƒÂ©is',
        es: 'Paneloj',
        fr: 'Tableaux',
        de: 'Dashboards',
        cn: ' Ã¤Â»ÂªÃ¨Â¡Â¨Ã¦ÂÂ¿ ',
        ae: 'Ã™Ë†Ã˜Â­Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€šÃ™Å Ã˜Â§Ã˜Â¯Ã˜Â© '
    }, {
        en: 'Default',
        pt: 'PadrÃƒÂ£o',
        es: 'Vaikimisi',
        fr: 'DÃƒÂ©faut',
        de: 'Standaard',
        cn: 'Ã©â€ºÂ»Ã¥Â­ÂÃ¥â€¢â€ Ã¥â€¹â„¢',
        ae: 'Ã™Ë†Ã˜Â¥Ã™ÂÃ˜ÂªÃ˜Â±Ã˜Â§Ã˜Â¶Ã™Å '
    }, {
        en: 'Ecommerce',
        pt: 'ComÃƒÂ©rcio eletrÃƒÂ´nico',
        es: 'Komerco',
        fr: 'Commerce ÃƒÂ©lectronique',
        de: 'E-commerce',
        cn: 'Ã©â€ºÂ»Ã¥Â­ÂÃ¥â€¢â€ Ã¥â€¹â„¢',
        ae: 'Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¬Ã˜Â§Ã˜Â±Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å Ã˜Â©'
    }, {
        en: 'Widgets',
        pt: 'Ferramenta',
        es: 'Vidin',
        fr: 'Widgets',
        de: 'Widgets',
        cn: 'Ã¥Â°ÂÃ©Æ’Â¨Ã¤Â»Â¶',
        ae: 'Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â§Ã˜Â¬Ã™Å Ã˜Â§Ã˜Âª'
    }, {
        en: 'Page layout',
        pt: 'Layout da pÃƒÂ¡gina',
        es: 'PaÃ„Âa aranÃ„Âo',
        fr: 'Tableaux',
        de: 'Mise en page',
        cn: 'Ã© ÂÃ©ÂÂ¢Ã¤Â½Ë†Ã¥Â±â‚¬',
        ae: 'Ã™Ë†Ã˜ÂªÃ˜Â®Ã˜Â·Ã™Å Ã˜Â· Ã˜Â§Ã™â€žÃ˜ÂµÃ™ÂÃ˜Â­Ã˜Â©'
    }, {
        en: 'Applications',
        pt: 'FormulÃƒÂ¡rios',
        es: 'Aplikoj',
        fr: 'Applications',
        de: 'Toepassingen',
        cn: 'Ã¦â€¡â€°Ã§â€Â¨Ã© ËœÃ¥Å¸Å¸',
        ae: 'Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€šÃ˜Â§Ã˜Âª'
    }, {
        en: 'Ready to use Apps',
        pt: 'Pronto para usar aplicativos',
        es: 'Preta uzi Apps',
        fr: ' Applications prÃƒÂªtes Ãƒ  lemploi ',
        de: 'Klaar om apps te gebruiken',
        cn: 'Ã¤Â»ÂªÃ¨Â¡Â¨Ã¦ÂÂ¿',
        ae: 'Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â² Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€šÃ˜Â§Ã˜Âª'
    },

];









/*=====================
02. Background Image js
  ==========================*/
$(".bg-center").parent().addClass('b-center');
$(".bg-img-cover").parent().addClass('bg-size');
$('.bg-img-cover').each(function () {
    var el = $(this),
        src = el.attr('src'),
        parent = el.parent();
    parent.css({
        'background-image': 'url(' + src + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'display': 'block'
    });
    el.hide();
});

/*----------------------------------------
passward show hide
----------------------------------------*/
$('.show-hide').show();
$('.show-hide span').addClass('show');

$('.show-hide span').on('click',function () {
    "use strict";
if ($(this).hasClass('show')) {
    $('input[name="login[password]"]').attr('type', 'text');
    $(this).removeClass('show');
} else {
    $('input[name="login[password]"]').attr('type', 'password');
    $(this).addClass('show');
}
});
$('form button[type="submit"]').on('click', function () {
    "use strict";
$('.show-hide span').addClass('show');
$('.show-hide').parent().find('input[name="login[password]"]').attr('type', 'password');
});



//landing header //
$(".toggle-menu").on('click',function(){
    "use strict";
    $('.landing-menu').toggleClass('open');
});   
$(".menu-back").on('click',function(){
    "use strict";
    $('.landing-menu').toggleClass('open');
});    

$('.product-size ul li ').on('click', function(e) {
    "use strict";
    $(".product-size ul li ").removeClass("active");
    $(this).addClass("active");
});

$('.email-sidebar .email-aside-toggle ').on('click', function(e) {
    "use strict";
    $(".email-sidebar .email-left-aside ").toggleClass("open");   
});

$('.job-sidebar .job-toggle ').on('click', function(e) {
    "use strict";
    $(".job-sidebar .job-left-aside ").toggleClass("open");   
});
$(".mode").on("click", function () {
    "use strict";
        $('.mode i').toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
        $('body').toggleClass("dark-only");
        var color = $(this).attr("data-attr");
        localStorage.setItem('body', 'dark-only');
    });