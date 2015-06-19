var headerHeight;

/*================(document).ready BEGIN================*/
$(document).ready(function() { 
   
    
    $("li.parent").prepend("<span class='marker'></span>");
    $(".content-img").wrap("<div class='img-wrapper'></div>").css("height","auto"); 
    
   
    $(".content-block").each(function(i){
        if($(this).children("div").length > 1){
            $(this).addClass("slider"+i);
            $(".slider"+i).bxSlider({
                adaptiveHeight: true
            });
            if($(this).data("title")){
                $(".bx-pager").prepend("<div class='pager-title'>"+$(this).data("title")+"</div>");
            }
        }
    });
	
	$(".collapse-menu").click(function(){
		$(".wrapper-menu,.main-logo,.header-bg-img,.popup-holder").slideToggle();
         $(".main-navbar li a").css({
            "line-height" :  $(".main-navbar li a").width() + "px"
       });
	});

	$(".various").fancybox({
		maxWidth	: 800,
		minHeight	: 100,
		autoSize	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});	
	
	$(".fancybox").fancybox({
		padding: 0,
		maxWidth	: 660,
		autoResize: true,
		beforeShow : function() {
			$('#carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				itemWidth: 150,
				itemMargin: 4,
				asNavFor: '#slider'
			});
		  
			$('#slider').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#carousel",
				start: function(slider){
				  $('body').removeClass('loading');
				}
			});
		}
	});
	 
});
/*================(document).ready END================*/
$(window).load(function(){
    

    spanEqualHeight();
     $(".marker").click(function (){
        var leftSpace = $(this).parent().parent().width();
        if($(".left-navbar .sliding-panel").is(":hidden")){
            $(this).addClass("opened");
            var subNavContent = $(this).siblings(".sub-nav").html();
            $(".left-navbar .sliding-panel").html(subNavContent);
            $(".left-navbar .sliding-panel").show().animate({
                left: leftSpace + 2 
            }, "slow");
        }else{
            $(this).removeClass("opened");
            leftSpace = $(".left-navbar .sliding-panel").width() - leftSpace;
            $(".left-navbar .sliding-panel").animate({
                left: 0
            }, "slow", function () {
                $(this).hide();
            });
        }       
    });
    itemHeight();
    $("li.active > a").click(function(e){
        e.preventDefault();
    })
});

/*================(window).resize BEGIN================*/
$(window).resize(function(){
    itemHeight();
    $('.inner-logo').logovAlign();
    spanEqualHeight();
});
/*================(window).resize END================*/

$(function() {
  $(window).load(function(){
    if ( $.browser.msie && $.browser.version < 9.0 ){
      $('.img-wrapper').css( "background-size", "cover" );
      $(' .left-navbar > ul > li, .left-navbar > ul > li a,.main-navbar > ul > li').css( "background-size", "contain" );
    }
  });
});


/*================Clear Inputs Function================*/

$(function() {
    $.fn.autoClear = function () {
        
        $(this).each(function() {
            $(this).data("autoclear", $(this).attr("value"));
        });
        $(this)
            .bind('focus', function() {   
                if ($(this).attr("value") == $(this).data("autoclear")) {
                    $(this).attr("value", "").addClass('autoclear-normalcolor');
                }
            })
            .bind('blur', function() { 
                if ($(this).attr("value") == "") {
                    $(this).attr("value", $(this).data("autoclear")).removeClass('autoclear-normalcolor');
                }
            });
        return $(this);
    }
});


/*============================ Sub pages side nav elements scaling =============================*/
function itemHeight(){
    var panelHeight = $(".header-panel").outerHeight(true);
    headerHeight = $(".header-bg-img").height() + panelHeight;
    var sideNavItemHeight, padRight, spaceRight;
    if(headerHeight > 910){
        sideNavItemHeight = 128;
        padRight = sideNavItemHeight / 0.8 - sideNavItemHeight;
        spaceRight = padRight - 10;
        $("#header").css({"height" : 910, "overflow": "hidden"});
        $(".header-bg-img").css({
            top: -(Math.abs($(".header-bg-img").height()-910)/2)
        })
    }else{
        $("#header").css({"height" : "auto", "overflow": "visible"});
        $(".header-bg-img").css({
            top: 0
        })
        sideNavItemHeight = (headerHeight / 7) -2;
        padRight = sideNavItemHeight / 0.8 - sideNavItemHeight;
        spaceRight = padRight - $(".marker").width() / 2;
    }
        $(".left-navbar .sliding-panel").css({
                "height" : $(".header-bg-img").height() - panelHeight,
                "top": panelHeight
        })
        $(".left-navbar > ul > li").css({
            "height" : sideNavItemHeight,
            "width" : sideNavItemHeight
        });
        $(".left-navbar > ul > li:first-child").css({
            "height" : sideNavItemHeight+2,
            "width" : sideNavItemHeight,
            "line-height" : sideNavItemHeight+2+"px"
        });
        $(".left-navbar > ul > li.active").css({
            "width" : sideNavItemHeight / 0.8
        })
        .prev("li").css({
            "border-bottom":"2px solid #fff"
        });

        $(".left-navbar > ul > li > a").css({
            "line-height" : sideNavItemHeight + "px",
            "width" : sideNavItemHeight
        });
         $(".left-navbar > ul").css({
            "width" : sideNavItemHeight
         });
        $(".left-navbar > ul > li.active > a").css({
            "padding-right" : padRight 
        });
        $(".sub-page-nav ul").css("width", $(window).width() - sideNavItemHeight);
        $(".marker").css({
            "margin-top": ($("li.parent").height() - 20) / 2,
            "right" : spaceRight
        });
       $(".sub-nav").css("margin-left", -padRight);
       $(".main-navbar li a").css({
            "line-height" :  $(".main-navbar li a").width() + "px"
       });
       if($(".left-navbar .sliding-panel").is(":visible")){
            $(".left-navbar .sliding-panel").css({
                "left": sideNavItemHeight+2
            })
       }
	   
}

/*=======================Equal height of content blocks=========================*/
function spanEqualHeight(){
   $('#content .row-fluid > div').css({"border": "none"});
    for (var i = $('#content .row-fluid').length - 1; i >= 0; i--) {
        var blockHeight = 0;
        var padding = 0;
        var flag = 0;
        var margin;
        $('#content .row-fluid').eq(i).children("div").each(function(){
            blockHeight = $('#content .row-fluid').eq(i).children("div:first-child").outerHeight();
            var row = $('#content .row-fluid').eq(i);
            var img = $('#content .row-fluid').eq(i).contents().find(".content-img");
                img.parent().css({
                    "background-image":  "url("+img.attr("src")+")",
                    "height" : "auto"
                });
                img.css({
                    "height" : "auto",
                    "visibility": "hidden"
                });
            if(blockHeight >= $('#content .row-fluid').eq(i).children("div:last-child").outerHeight()){
                $('#content .row-fluid').eq(i).children("div:first-child").css("border-right", "2px solid #fff");
                $('#content .row-fluid').eq(i).children("div:last-child").css("border-left", "0px solid #ffffff");
            }else{
                $('#content .row-fluid').eq(i).children("div:last-child").css("border-left", "2px solid #ffffff");
            }
                if(row.height() > img.height()){
                    img.parent().css({
                        
                        "height" : row.height()
                    });
                    img.css({
                        "height" : "100%"
                    });
                    
                }
        });
    };

}
/*=======================Input clearing func=========================*/
$(function() { 
    $('.styled-input').autoClear();
});


/*======================== Vertical alignment funcs ============================*/
jQuery.fn.linkvAlign = function (){
    var cHeight = $(this).height();
    var pHeight = $(this).parent().height();
    var nHeight = (pHeight - cHeight) / 2;
    $(this).css("padding-top", nHeight);
}
jQuery.fn.logovAlign = function (){
    var cHeight = $(this).height();
    var pHeight = $(this).parent().height();
    var nHeight = (pHeight - cHeight) / 2 - 37;
    $(this).css({
        "margin-top": nHeight,
        "line-height": cHeight+"px"
    });

}
