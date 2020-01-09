$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

		$(".site-overlay").on( "click", function() {
           $("#nav-icon1").removeClass('open');
		});

		$(".pushy-content").on( "click", function() {
           $("#nav-icon1").removeClass('open');
		});

});
