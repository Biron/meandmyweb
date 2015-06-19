// Declare global variables-------------------------------------------------------------//

var slideWidth = 0;
var slider, totalSlideWidth, slidesWidth, totalSlides, current;


// document ready begin  ---------------------------------------------------------------//
$(document).ready(function(){
	slideWidth = $(window).width();

		

// scroll to top ----------------------------------------------------------------------//
	$('a.toTop').on('click', function () {
	    $.mobile.silentScroll(0);
	    return false;
	});


// flexslider load -------------------------------------------------------------------//
	if(jQuery().flexslider){
		$('.slider').flexslider({
		    animation: "slide",
		    itemWidth: slideWidth * 0.9,
		    before: function(slider) {
	       		current = slider.currentSlide;
	      	}
		});
	}


		$('body').click(function() { // скрыть блок списка регионов по клику вне блока
	        $(".active").removeClass("active");
			$(".subMenu").hide();
	    });
	    
	    $('.parent').live("click", function() { // показывать блок при действиях внутри блока
	        $(this).addClass("active");
			$(this).parents(".ui-navbar").next(".subMenu").show();
	    });
	    
	    // Открытие списка <ul> (Клик по div'у "Выбрать регион")
	    $('body').on("click",".parent", function(ob) {
	    	ob.stopPropagation();   // сюда вписал и это тоже как вы и советовали	  
	   	 	if($(this).parents(".ui-navbar").next(".subMenu").is(":visible")){
				$(this).removeClass("active");
				$(this).parents(".ui-navbar").next(".subMenu").hide();
				 console.log("1")
			}else{
				$(".active").removeClass("active");
				$(".subMenu").hide();
				$(this).addClass("active");
				$(this).parents(".ui-navbar").next(".subMenu").show();
				 console.log("2")	
			}
			return false;
		});
});
// document ready end -----------------------------------------------------------------//

$(function(){

	// menu toggle ------------------------------------------------------------------------//
	/*	
// hiding menu if outside click--------------------------------------------------------//
	$(document).mouseup(function (e) {
	    var container = $(".subMenu");
	    if (container.has(e.target).length === 0){
	        container.hide();
	        $(".parent").removeClass("active");
	        console.log("0")
	    }	    
	});*/

});

$(window).load(function(){
	$(".ui-page-active").each(function(){
		$(".parent").removeClass("active");
		$(".subMenu").hide();
	});
		
});

	

	// popup slider -----------------------------------------------------------------------//
	if(jQuery().photoSwipe){
		(function(window, PhotoSwipe){
			document.addEventListener('DOMContentLoaded', function(){
				var options = {
						getImageCaption: function(el){
							
							var captionText, captionEl;
							
							// Get the caption from the alt tag
							if (el.nodeName === "IMG"){
								captionText = el.getAttribute('alt'); 
							}
							var i, j, childEl;
							for (i=0, j=el.childNodes.length; i<j; i++){
								childEl = el.childNodes[i];
								if (el.childNodes[i].nodeName === 'IMG'){
									captionText = "<div class='date'>" + childEl.getAttribute('rel') + "</div> <div class='captionRight'><div class='captionTitle'>" + childEl.getAttribute('title') + "</div><div class='captionDesc'>" + childEl.getAttribute('alt') + "</div></div>"; 
									captionTitle = childEl.getAttribute('title'); 
									captionDate = childEl.getAttribute('rel'); 

								}
							}
							
							// Return a DOM element with custom styling
							captionEl = document.createElement('div');
							captionEl.innerHTML  = captionText;
							return captionEl;
						
							// Alternatively you can just pass back a string. However, any HTML 
							// markup will be escaped
							
						},enableMouseWheel: false , enableKeyboard: false, captionAndToolbarAutoHideDelay: 0, captionAndToolbarFlipPosition: true 
					},
					instance = PhotoSwipe.attach( window.document.querySelectorAll('.gallery-holder a'), options );
			}, false);
		}(window, window.Code.PhotoSwipe));
	}



    
    
	