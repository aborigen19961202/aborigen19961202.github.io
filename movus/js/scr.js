$( document ).ready(function() {
	$('[data-open]').click(function(event) {
		event.preventDefault();
		$('[data-open]').parent().toggleClass( "active" );
		$('.menu').fadeIn(1000);
	});
	$('[data-close]').click(function(event) {
    	event.preventDefault();
    	$('[data-close]').parent().removeClass( "active" );
    	$('.menu').fadeOut(1000);
	});


	

});
// $(window).resize(function(){
// 	if($(window).width()>1120){
// 		$(".menu").removeAttr('style');
// 	}
	
// });








 //    $('[data-open]').click(function(event) {
	// 	event.preventDefault();
	// 	$('[data-open]').parent().toggleClass( "active" )
	// 	$('[data-target]').addClass("active");
	// });
	// $('[data-close]').click(function(event) {
 //    	event.preventDefault();
 //    	$('[data-close]').parent().removeClass( "active" )
 //    	$('[data-target]').removeClass("active");
	// });