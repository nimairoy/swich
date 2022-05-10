$(document).ready(function(){

	// scroll down

	$('#scroll_down_btn').bind("click", function(){
		$('html, body').animate({scrollTop: $(document).height() }, 1200);
		return false;
	});

	// scroll top
	 $('body').materialScrollTop();

	  // data filter
	  var mixer = mixitup('.gallery_bars');

	  // wow animation
	  new WOW().init();

});
	// menu fixed

$(window).scroll(function(){
	var ourWindow = $(this).scrollTop();

	if(ourWindow>100){
		$('body').addClass('fixed');
	}else{
		$('body').removeClass('fixed');
	}
});

