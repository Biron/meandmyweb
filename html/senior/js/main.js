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
    $(".subcategory:last-child").addClass("last");


    $("a.caregiving.current").parents(".main-nav").css('background-position','0px -42px');
    $("a.living.current").parents(".main-nav").css('background-position','0px 2px');
    $("a.home.current, a.about.current").parents(".main-nav").css('background-position','0px 46px');
    $("a.healthcare.current").parents(".main-nav").css('background-position','0px -86px');
    $("a.resources.current").parents(".main-nav").css('background-position','0px -130px');
    $("a.help.current").parents(".main-nav").css('background-position','0px -174px');
    var navPosition = getBackgroundPos($(".main-nav"));
     $(".main-nav a").hover(function(){
        $(this).parent().toggleClass("hover");
     });
    $(".main-nav a.current").parent().addClass("current");
    $("a.home, a.about").hover(function(){
        $(".main-nav").css('background-position','0px 46px');
    }, function(){
        $(".main-nav").css('background-position', navPosition.x+'px '+navPosition.y+'px');
    });
    $("a.living").hover(function(){
        $(".main-nav").css('background-position','0px 2px')
    }, function(){
        $(".main-nav").css('background-position', navPosition.x+'px '+navPosition.y+'px');
    });
    $("a.caregiving").hover(function(){
        $(".main-nav").css('background-position','0px -42px')
    }, function(){
        $(".main-nav").css('background-position', navPosition.x+'px '+navPosition.y+'px');
    });
    $("a.healthcare").hover(function(){
        $(".main-nav").css('background-position','0px -86px')
    }, function(){
        $(".main-nav").css('background-position', navPosition.x+'px '+navPosition.y+'px');
    });
    $("a.resources").hover(function(){
        $(".main-nav").css('background-position','0px -130px')
    }, function(){
        $(".main-nav").css('background-position', navPosition.x+'px '+navPosition.y+'px');
    });
    $("a.help").hover(function(){
        $(".main-nav").css('background-position','0px -174px')
    }, function(){
        $(".main-nav").css('background-position', navPosition.x+'px '+navPosition.y+'px');
    });
    
});


function getBackgroundPos(obj) {
  var pos = obj.css('background-position');
  if (pos == 'undefined' || pos == null) {
    pos = [obj.css('background-position-x'),obj.css('background-position-y')];
  }
  else {
    pos = pos.split(' ');
  }
  return {
    x: parseFloat(pos[0]),
    y: parseFloat(pos[1])
  };
}