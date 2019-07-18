$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});


	// $(".menu-btn").on( "click", function() {
	//   if($(this).attr("trigger")==="0"){                
	// 	  	 $(this).animate({"right":"200px"},200);
	//          $(this).attr("trigger","1");
	//  }
	//   else{
	//     $(this).animate({"right":"0px"},200);
 //        $(this).attr("trigger","0");
	//   }
	// });


		$(".site-overlay").on( "click", function() {
           $("#nav-icon1").removeClass('open');
		});

		$(".pushy-content").on( "click", function() {
           $("#nav-icon1").removeClass('open');
		});

});