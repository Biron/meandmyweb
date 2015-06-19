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
function moveArticle(){
    $(".row-fluid.article").css({
      paddingRight: $("#slide-panel").width()
    });
}

$(function() { 
    $(document).bind("contextmenu",function(e){
      
      if(e.target == $("span.context")){
        e.preventDefault();
        alert("left-click");
      }
      
    });

    $(".articleContent p").each(function(){
      $(this).html("<span class='context'>"+$(this).html()+"</span>");
    });
    $('.styled-input').autoClear();



    moveArticle();

var clicking = false,
	position;

$('.slide-panel-button').mousedown(function(e){
    clicking = true;
    position = e.pageX;
   e.preventDefault();
});

$(document).mouseup(function(e){
    clicking = false;
    if(position < e.pageX){
    	$(".close-panel").click();
    }else{
    	$(".open-panel").click();
    }
})

$('.slide-panel-button').mousemove(function(){
    if(clicking == false) return;
});


    $(".close-panel").on("click", function(e){
      e.preventDefault();
      e.stopPropagation();
      if($(this).parents("#slide-panel").hasClass("opened")){
        $(this).parents("#slide-panel").animate({
          width: "48%"
        }, {
          duration: 600,
          step: function(){
            moveArticle();
          },
          complete:function(){ 
            $(this).removeAttr("style");
          }
        }).removeClass("opened").addClass("half-opened")
      }else{
        $(this).parents("#slide-panel").animate({
          width: "50px"
        }, {
          duration: 600,
          step: function(){
            moveArticle();
          },
          complete:function(){ 
            $(this).removeAttr("style");
          }
        }).removeClass("half-opened").addClass("closed")
      }
      $("#content").removeAttr("style");
    });

    $(".open-panel").on("click", function(e){
      e.preventDefault();
      e.stopPropagation();
      if($(this).parents("#slide-panel").hasClass("closed")){
        $(this).parents("#slide-panel").animate({
          width: "48%"
        }, {
          duration: 600,
          step: function(){
            moveArticle();
          },
          complete:function(){ 
            $(this).removeAttr("style");
          }
        }).removeClass("closed").addClass("half-opened")
      }else{
        $(this).parents("#slide-panel").animate({
          width: "95%"
        },{
          duration: 600,
          step: function(){
            moveArticle();
          },
          complete:function(){ 
            $(this).removeAttr("style");
            $("#content").css({
              height: $(".when-opened").height()
            });
          }
        }).removeClass("half-opened").addClass("opened");

      }
    });

    $(".with-allow").each(function(){
      $(this).find("input[type='text']").css({
        paddingLeft: $(this).find(".allowed-holder").width() + 15
      });
    });
    $(".with-allow").find(".close").on("click", function(){
      $(this).parent().detach();
      $(".with-allow input[type='text']").css({
        paddingLeft: $(".with-allow .allowed-holder").width() + 15
      });
    });
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    if(jQuery().datepicker){
        /*$.datepicker.regional['ru'] = { 
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
        $.datepicker.setDefaults($.datepicker.regional['ru']);*/
        /*$( "#from, .dateTime" ).datepicker({
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
        });*/
        var reminder;
        var reminder = $("#dateTime").datepicker({ 
            format: 'dd.mm.yyyy',
            minViewMode: 1
        }).on('changeDate', function(ev) {
          reminder.hide();
        }).data('datepicker');

        var reminder2 = $("#dateTime2").datepicker({ 
            format: 'dd.mm.yyyy',
            minViewMode: 1
        }).on('changeDate', function(ev) {
          reminder2.hide();
        }).data('datepicker');

        var reminder3 = $("#dateTime3").datepicker({ 
            format: 'dd.mm.yyyy',
            minViewMode: 1
        }).on('changeDate', function(ev) {
          reminder3.hide();
        }).data('datepicker');

        var checkin = $('#from').datepicker({
          format: 'dd.mm.yyyy'
        }).on('changeDate', function(ev) {
          if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
          }
          checkin.hide();
          $('#to')[0].focus();
        }).data('datepicker');

        var checkout = $('#to').datepicker({
          format: 'dd.mm.yyyy',
          onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
          }
        }).on('changeDate', function(ev) {
          checkout.hide();
        }).data('datepicker');
    }
  });

$(document).ready(function() {
  $(".main-page-slider ul").bxSlider({
        auto: true,
        autoHover: true,
        pause: 7000,
        speed: 1200,
        controls: false,
        onSliderLoad: function(){
            $(".bx-pager").after("<a href='#' class='hideSlider' >Скрыть слайдер</a>");
            //pagerBut();
        }
    });
  var currentLink;
  $(".main-navigation > ul > li, .control-panel > ul > li").each(function(){
    if($(this).hasClass("current")){
      currentLink = $(this).data("panel");
    }
  });  
  $(".main-navigation > ul > li.current a, .control-panel > ul > li.current a").append("<span></span>");
  $("."+currentLink).show();

   $(".main-navigation > ul > li > a, .control-panel > ul > li a").on("click", function(){
      if($(this).parent().hasClass("current") || !$(this).parent().data("panel")){return false;}
      console.log($(this).parent().data("panel"));
      $(".main-navigation li.current a span, .control-panel .current a span").detach();
      $(".main-navigation li.current, .control-panel .current").removeClass("current");
      var curItem = $(this);
      $("."+currentLink).slideUp(400, function(){
        setTimeout(function(){
          curItem.append("<span></span>");
          curItem.parent().addClass("current");
          currentLink = curItem.parent().data("panel");
          $("."+currentLink).slideDown(600, function(){
            $("."+currentLink).css({overflow: "visible"});
          });
          
        }, 150)
      });
   });
});

$(window).load(function() {
	   if(jQuery().modal){
      $('.modal').modal('hide');
      $('#myModal10').on('show.bs.modal', function () {
        console.log("showed");
      })
    }
    if(jQuery().selectbox){
      $("select").selectbox();
    }
    $(".form-row textarea").bind('input propertychange',function(){
      var textLength = 1500 - $(this).val().length;
      $(".text-length span").html(textLength);
    });
    
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

   $(".green-button,.buttonHolder a,.listDiskSpace-button a, .blueSubmitS").mouseup(function(){
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
    $('.checkBox, .checkbox-holder label').click(function() {
        $(this).parents(".checkbox-holder").toggleClass('active');
    });

    //end checkbox
    $('.radio, .radio-holder label').click(function() {
        if($(this).parents('.groupedRadio')){
          $(this).parents('.groupedRadio').find(".radio-holder.active").removeClass("active");
          //var html = $(this).parents('.radio-holder').find("label").html();
          //$(this).parents('.groupedRadio').html("<strong>" + html +"</strong><a href='#'>Изменить решение</a>" );
        }else{
           $(".radio-holder.active").removeClass("active");
        }
        $(this).parents(".radio-holder").addClass('active');
    });

    $(".with-suscribe").click(function(e){
      e.preventDefault();
      if($(this).hasClass("not-subscribed")){
        $(this).removeClass("not-subscribed").addClass("subscribed");
      }else{
        $(this).removeClass("subscribed").addClass("not-subscribed");
      }
    });
    $(".starSignHolder, .starSign").click(function(e){
      e.preventDefault();
      if($(this).hasClass("true")){
        $(this).removeClass("true").addClass("false");
        $(this).children("span").html("Вы не подписаны");
        $(this).siblings(".sign-up-holder").find("a").html("Подписаться");
      }else{
        $(this).removeClass("false").addClass("true");
        $(this).children("span").html("Вы подписаны");
        $(this).siblings(".sign-up-holder").find("a").html("Отписаться");
      }
    });
    
    $(".sign-up-holder a").on("click", function(){
      var thisHtml = $(this).html();
      console.log(thisHtml);
      if(thisHtml == "Отписаться"){
        $(this).parent().siblings(".starSignHolder, .starSign").removeClass("true").addClass("false");
        $(this).parent().siblings(".starSignHolder, .starSign").children("span").html("Вы не подписаны");
        $(this).html("Подписаться")
      }else{
        $(this).html("Отписаться")
        $(this).parent().siblings(".starSignHolder, .starSign").removeClass("false").addClass("true");
        $(this).parent().siblings(".starSignHolder, .starSign").children("span").html("Вы подписаны");
      }
    });

    $(".onButton").on("click", function(){
      if($(this).hasClass("active")){
        $(this).siblings('.add-article').removeClass('not-active');

      }else{
        $(this).siblings('.add-article').addClass('not-active');
      }
    });
    
  $('input, textarea').focus(function() {
       $(this).prev('label').css('color', '#35a3ef');
  }).blur(function() {
       $(this).prev('label').removeAttr("style");
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
    $(this).siblings(".fakefile").find('.filetext').val($this.val());
  });

  $(' .fakefile a').on("click", function(){
      $(this).parents(".fakefile").siblings('input[type="file"]').click();
      //fileInput.click();
  }).show();

  $(".listTime li").on("click", function(){
    if($(this).hasClass("active")){
      return false;
    }
    $(this).siblings(".active").find(".radio").removeAttr('checked');
    $(this).siblings(".active").find(".radio-holder").removeClass("active");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(this).find(".radio-holder").addClass("active");
    $(this).find(".radio").attr('checked', 'checked');
  });
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
          //$tabs.tabs( "option", "active", $tab_items.index( $item ) );
          $( this ).appendTo( $list ).show( "slow" );
        });
      }
    });
  }
});

