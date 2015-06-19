$(function() {
    $.fn.autoClear = function () {        
        $(this).each(function() {
            $(this).data("autoclear", $(this).attr("value"));
        });
        $(this).bind('focus', function() {   
                if ($(this).attr("value") == $(this).data("autoclear")) {
                    $(this).attr("value", "").addClass('autoclear-normalcolor');
                }
        }).bind('blur', function() { 
                if ($(this).attr("value") == "") {
                    $(this).attr("value", $(this).data("autoclear")).removeClass('autoclear-normalcolor');
                }
            });
        return $(this);
    }
});

$(function() { 
    $('.styled-input').autoClear();
    /*if(jQuery().sortable){
      $(".innerListGroup").sortable({
        connectWith: ".innerListGroup"
      }).disableSelection();
    }*/
    if(jQuery().datepicker){
        $.datepicker.regional['ru'] = { 
          closeText: 'Закрыть', 
          prevText: '&#x3c;Пред', 
          nextText: 'След&#x3e;', 
          currentText: 'Сегодня', 
          monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
          'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
          monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
          'Июл','Авг','Сен','Окт','Ноя','Дек'], 
          dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
          dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
          dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
          dateFormat: 'dd.mm.yy', 
          firstDay: 1, 
          isRTL: false 
        }; 
        $.datepicker.setDefaults($.datepicker.regional['ru']);

   
        $( "#from" ).datepicker({
          defaultDate: "+1w",
          numberOfMonths: 1,
          dateFormat: "dd.mm.yy",
          onClose: function( selectedDate ) {
            $( "#to" ).datepicker( "option", "minDate", selectedDate );
          }
        });
        $( "#to" ).datepicker({
          defaultDate: "+1w",
          numberOfMonths: 1,
          dateFormat: "dd.mm.yy",
          onClose: function( selectedDate ) {
            $( "#from" ).datepicker( "option", "maxDate", selectedDate );
          }
        });
    }
  });

$(document).ready(function() {
  $(".main-page-slider ul").bxSlider({
        auto: true,
        pause: 7000,
        speed: 1200,
        controls: false,
        onSliderLoad: function(){
            $(".bx-pager").after("<a href='#' class='hideSlider' >Скрыть слайдер</a>");
            //pagerBut();
        }
    });
});

$(window).load(function() {
       if ($.browser.msie  && parseInt($.browser.version, 10) > 8){}else{equalColumns();}
    $(".wrapperGroupContentHolder.extended").hide();
    $(".expansionGroup").on("click", function(){
      $(".simpleGroup, .listPlaces").removeClass("active");
      $(this).addClass("active");
      $(".wrapperGroupContentHolder.extended").hide();
      $(".wrapperGroupContentHolder.normal").fadeIn(600, function(){
        if ($.browser.msie  && parseInt($.browser.version, 10) > 8){}else{equalColumns();}
      });
    })
    $(".simpleGroup, .listPlaces").on("click", function(){
      $(".expansionGroup").removeClass("active");
      $(this).addClass("active");
      $(".wrapperGroupContentHolder.normal").hide();
      $(".wrapperGroupContentHolder.extended").fadeIn(600, function(){
        if ($.browser.msie  && parseInt($.browser.version, 10) > 8){}else{equalColumns();}
      });
       
    })
    $(".current a").append("<span></span>");
    

  if ($.browser.msie  && parseInt($.browser.version, 10) <= 8) {
    $(".buttonHolder > a, .listDiskSpace-button > a").each(function(){
      var text = $(this).html();
      $(this).html("<span>"+text+"</span>");
    }) 
    $(".green-button").each(function(){
      var text = $(this).html();
      $(this).html("<span>"+text+"</span>");
    }) .wrap("<span class='green-wrap'></span>");

   $(".green-button,.buttonHolder a,.listDiskSpace-button a").mouseup(function(){
      $(this).parent().removeClass("focus");
    }).mousedown(function(){
      $(this).parent().addClass("focus");
    });

    $(".submitButton").mouseup(function(){
      $(this).removeClass("focus");
    }).mousedown(function(){
      $(this).addClass("focus");
    });
    $(".hasDatepicker").each(function(){
      $(this).wrap("<div class='data-wrap'></div>");
      $(".data-wrap").append("<span class='data-icon'></span>");
    })
    $("ul.wrapperGroup li").each(function(){
      var thisHtml = $(this).html();
      $(this).html("<div>"+thisHtml+"</div>");
    });
  } 
    if ($.browser.msie  && parseInt($.browser.version, 10) <= 7){
     $('.columns, .innerListGroup li').each(function(){
       var fullW = $(this).outerWidth(),
           actualW = $(this).width(),
           wDiff = fullW - actualW,
           newW = actualW - wDiff;
   
       $(this).css('width',newW);
      });
     $("ul.img-list li a").append("<img src='img/elem/av-img-bg-with-shad.png' class='back-img'/>");

    }
    /*$(".main-page-slider ul li").css({
        height: $(".main-page-slider ul li").find("img").height()+20
    })*/


    $(document).on("click", ".hideSlider", function(){
        $(".main-page-slider").slideUp();
    });
    $(document).on("click", ".closeButton", function(){
        $(".socialButtonsHolder").slideUp();
    });
    //checkbox
    $('.checkBox, label').click(function() {
        $(this).parent().parent().toggleClass('active');
        if($(this).siblings("span").children(".checkBox").length > 0){
            $(this).parent().toggleClass('active');
        }
    });

    //end checkbox
    $('.radio, label').click(function() {
        $(this).parent().parent().toggleClass('active');
        if($(this).siblings("span").children(".radio").length > 0){
            $(this).parent().toggleClass('active');
        }
    });

    $(".with-suscribe").click(function(e){
      e.preventDefault();
      if($(this).hasClass("not-subscribed")){
        $(this).removeClass("not-subscribed").addClass("subscribed");
      }
    });
    
    

});

$(window).resize(function(){
  //pagerBut();
})

function equalColumns(){
    var wrapperH = $(".wrapperGroupContentHolder").height(),
        wrapperGroupHeight = $(".wrapperGroupContentHolder .main-content").height(),
        wrapperGroupHeightLeft =  $(".wrapperGroupContentHolder .left-side").height();

    if(wrapperGroupHeight>wrapperGroupHeightLeft){
      $(".wrapperGroupContentHolder .left-side").css({
        "height": wrapperH,
        marginBottom: "-40px"
      })
    }else{
      $(".wrapperGroupContentHolder .main-content").css({
        "height": wrapperH,
        marginBottom: "-40px"
      })
    }

/*
    var wrapperGroupHeight = $(".wrapperGroupContentHolder .main-content").height();
    var wrapperGroupHeightLeft =  $(".wrapperGroupContentHolder .left-side").height();
    if(wrapperGroupHeightLeft == $(".wrapperGroupContentHolder").outerHeight()){
      return false;
    }
    if(wrapperGroupHeight>wrapperGroupHeightLeft){
      $(".wrapperGroupContentHolder .left-side").css({
        "height": $(".wrapperGroupContentHolder").height()+40,
        marginBottom: "-40px"
      })
      console.log(wrapperGroupHeight, $(".wrapperGroupContentHolder").outerHeight());
    }else{
      $(".wrapperGroupContentHolder .main-content").css({
        "height": $(".wrapperGroupContentHolder").height(),
        marginBottom: "-40px"
      })
    }*/
}
function pagerBut(){
  $(".hideSlider, .bx-pager").removeAttr("style");
  var slideH = $(".main-page-slider ul li").children("div").outerHeight(),
      imgH = $(".main-page-slider ul li").outerHeight();
  var margintop;
       if(imgH > slideH ){           
           marginTop = slideH-imgH+10;
       }else{   
           marginTop = 10;
       }
  $(".hideSlider").css("top", marginTop);
  $(".bx-pager").css("top", marginTop);
}


//$(window).bind('resize', resizeWindow); //Fix for IE resizeWindow

$(function(){
  var fileInput = $('input[type="file"]');
  fileInput.change(function(){
    $this = $(this);
    $('.filetext').text($this.val());
  });

  $(' .fakefile a').on("click", function(){
      fileInput.click();
  }).show();
});

$(function() {
if(jQuery().sortable){
 $('.sortable').sortable({
    connectWith: ".sortable",
    handle: ".handlerIco"
  })
 
    var $tabs = $(".tabs").tabs();
 
    var $tab_items = $( ".navGroupList li", $tabs ).droppable({
      tolerance: "pointer",
      accept: ".sortable li",
      hoverClass: "ui-tabs-active",
      drop: function( event, ui ) {
        var $item = $( this );
        var $list = $( $item.find( "a" ).attr( "href" ) )
          .find( ".sortable" );
 
        ui.draggable.hide( "slow", function() {
          $( this ).appendTo( $list ).show( "slow" );
        });
      }
    });
  }
});

