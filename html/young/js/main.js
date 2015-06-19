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

$(function() { 
    $('.styled-input').autoClear();
    $('select').styler();
    $('.img-holder img, .img-caption').mouseover(function(){
        var caption = $(this).parent().children(".img-caption");
        caption.css("width", $(this).parent().children("img").width() - 30);
        caption.slideUp(400);
    }); 
    $('.img-holder img, .img-caption').mouseout(function(){
        var caption = $(this).parent().children(".img-caption");
         caption.is(":not(:animated)").slideDown(400);
    });
});