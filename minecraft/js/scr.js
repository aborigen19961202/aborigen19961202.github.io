$(document).ready(function () {
	$('.sidebar li > a').on('click', function(){
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
});
$( document ).ready(function() {
	$('[data-open]').click(function(event) {
		event.preventDefault();
		$('[data-open]').parent().toggleClass( "active" );
		$('.menu').fadeIn(500);
	});
	$('[data-close]').click(function(event) {
    	event.preventDefault();
    	$('[data-close]').parent().removeClass( "active" );
    	$('.menu').fadeOut(500);
	});
});
$( document ).ready(function() {
	$('[data-open-sidebar]').click(function(event) {
		event.preventDefault();
		$('[data-open-sidebar]').parent().toggleClass( "active" );
		$('.sidebar').fadeIn(500);
	});
	$('[data-close-sidebar]').click(function(event) {
    	event.preventDefault();
    	$('[data-close-sidebar]').parent().removeClass( "active" );
    	$('.sidebar').fadeOut(500);
	});
});
