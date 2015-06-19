$(document).ready(function (){
	$('.textBorder a').each(function() {
		var text = $(this).find('strong').html();
		/*alert(text);*/
		var textinner = '<span class="b1">'+text+'</span>'+'<span class="b2">'+text+'</span>'+'<span class="b3">'+text+'</span>'+'<span class="b4">'+text+'</span>'+'<span class="b5">'+text+'</span>'+'<span class="b6">'+text+'</span>'+'<span class="b7">'+text+'</span>'+'<span class="b8">'+text+'</span>';
		$(this).append(textinner);
	});
});