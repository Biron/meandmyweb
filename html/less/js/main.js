$(document).ready(function(){
    $(".main-nav ul li a").hover(
       function(){ $(this).parent().addClass("hover") },
       function(){ $(this).parent().removeClass("hover") }
    )
     $('.bxslider').bxSlider({
        pager: true
     });
});