$(document).ready(function(){
$('.block.caption').hover(function(){
$(".captionbox", this).stop().animate({height: '0px', top:'230px'},{queue:false,duration:160});
}, function() {
$(".captionbox", this).stop().animate({height: '43px', top:'130px'},{queue:false,duration:160});
});
$('.captionbox').click(function(){
document.location = $(this).parent().find('a').attr('href');
});
}); 