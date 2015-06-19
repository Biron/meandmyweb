
$(document).ready(function(){
    /*var uaAgent = navigator.userAgent.toLowerCase();
    if(uaAgent.indexOf("msie") >= 0 || uaAgent.indexOf("opera") >= 0){
        $(".product-cart-front").css("z-index", 1);
    }*/
    var curBlockHeight, curBlockWidth, curBlockTop,  curBlockLeft;
    $(".block").mouseover(function() {
        if($(this).hasClass("animate") || $(this).hasClass("hovered")){
            return false;
        }
            $(this).addClass("hovered");
                curBlockHeight = $(this).height(),
                curBlockWidth = $(this).width(),
                curBlockLeft = $(this).position().left,
                curBlockTop = $(this).position().top;

            $(this).stop().animate({
                "width": curBlockWidth + curBlockWidth*0.2,
                "height": curBlockHeight + curBlockHeight*0.2
            },{
                duration: 300,
                step: function(fx, now){
                    //console.log(fx, now.prop);
                    if(now.prop == "width"){
                        $(this).css("left", curBlockLeft + (curBlockWidth-fx)/2);
                    }else{                        
                        $(this).css("top", curBlockTop + (curBlockHeight-fx)/2);
                    }
                    //$(fx.elem).offset({top: -now*0.1, left: -now*0.1});
                },
                complete: function(){
                    $(this).css("z-index", 100);
                }
            });
        }).mouseleave(function(){
            if(!$(this).hasClass("animate")){
                $(this).removeClass("hovered");
                $(this).stop().animate({
                    "width": curBlockWidth,
                    "height": curBlockHeight,
                    "left":curBlockLeft,
                    "top":curBlockTop
                }, 0, function(){
                    $(this).removeAttr("style");
                });
                
            }
        });
     $(".block").on("click", function(){
        if($(this).hasClass("animate")){
            return false;
        }
        $(".animate").fadeOut(300, function(){
            $(this).removeAttr("style");   
            $(".product-stripe").fadeOut(300).detach();        
        });
        $(".animate").fadeIn(3000, function(){
                $(this).removeClass("animate");
            })
        var durCur =  $(this).position().top * 4;
        durCur = durCur < 300 ? 300 : durCur;
        $(this).removeAttr("style");
        $(this).addClass("animate");
        $(this).animate({
            top: -240,
            left: -120
        }, durCur,"linear")
	    $(this).animate({
		    "left": "-500px"
    	    },{
	        step: function(now, fx) {
    			$(fx.elem).offset({top: Math.sin(-now/270)*650-300});                
    		 },
             complete: function(){
                var offLeft = $(this).offset().left; 
                var offTop = $(this).offset().top + $(this).height();
                var imgSrc = $(this).data("stripe");
                var marginT = $(this).height()/2 + 20;
                $("body").prepend("<div class='product-stripe'><img alt='' src="+imgSrc+" /></div>");
                
                $(".product-stripe").css({
                    position: "absolute",
                    top: offTop-marginT,
                    left: offLeft-100,
                    "z-index": 200
                });
             },
             duration: 1000,
             easing: "linear",
             queue: true
		}); 
    });


    function passThrough(e) {
        var clickable, zIndex;
        $(".block").each(function(i) {
           // check if clicked point (taken from event) is inside element
           var mouseX = e.pageX;
           var mouseY = e.pageY;
           var offset = $(this).offset();
           var width = $(this).width();
           var height = $(this).height();
           if(i == 1){ zIndex = $(this).css("z-index");}
           if (mouseX > offset.left && mouseX < offset.left+width 
               && mouseY > offset.top && mouseY < offset.top+height){
                if(i == 1 || zIndex < $(this).css("z-index")){
                    zIndex = $(this).css("z-index");
                    clickable = $(this); // force click event
                    console.log(zIndex);
               }

           }
            
        });
        clickable.click();
        
    }

    $(".product-cart-front").click(passThrough);
});


