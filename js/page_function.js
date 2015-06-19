jQuery(document).ready(function(){
        jQuery('.topMenu ul li').hover(
            function() {
                jQuery(this).find('.down').stop(true, true);
    			jQuery(this).find('.down').slideDown(300);
			},
            function() {
                jQuery(this).find('.down').slideUp(300);
			}
        );
        jQuery('.topMenu ul li').find('.down').slideUp(0);
        jQuery('.login .down').slideUp(0);
		jQuery('#login').click(
            function() {
    			jQuery('.login .down').slideToggle(300);
		});
});