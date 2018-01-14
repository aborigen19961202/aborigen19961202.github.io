jQuery(document).ready(function($) {
	$('#lightSlider').lightSlider({
		item:1,
		loop:true,
		auto:true,
		pause: 5000,
		speed: 2000,
		pager: false
	});
});
// $(document).ready(function() {
// 	$('#autoWidth').lightSlider({
// 	    autoWidth:true,
// 	    loop:true,
// 	    onSliderLoad: function() {
// 	        $('#autoWidth').removeClass('cS-hidden');
// 	    } 
// 	});  
// });