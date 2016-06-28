/**
 * stickIt v1.0.0 - Stick anything
 * Copyright 2016, Gaurav Sirauthiya
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
(function($) { 
    $.fn.stickIt = function( options ) {
		var el = $(this);
        /*
		* Default Settings
		*/
        var settings = $.extend({ 
			backGround	 : 'inherit',
			position	 : 'fixed',
			width		 : '100%',
			zIndex		 : '1',
			animation	 : false,
			opacity	 	 : '1',
			duration	 : '200',
			delay		 : '100',
        }, options);
		/* adding target class */
		el.addClass('sticky-target');
		/*
		* @function scroll function
		*/
		$(window).on('scroll',function(){
			var scrollPosition = $(window).scrollTop();  
			if (scrollPosition >= 100){
				console.log('stick');
					el.addClass('stickyHeader');
			}
			if (scrollPosition < 100){
				setTimeout(function(){
				console.log('no');
				el.removeClass('stickyHeader');		
				},settings.delay);
				
			}	
		});
		/* @var duration of animation */
		var duration = 0;
		if(settings.animation)
		{
			duration = settings.duration;
		}
		
	  var appendCss = $("<style>")
    .prop("type", "text/css")
    .html("\
    .sticky-target  {\
		-webkit-transform: translate(0, 0);\
		-moz-transform: translate(0, 0);\
		-o-transform: translate(0, 0);\
		-ms-transform: translate(0, 0);\
		transform: translate(0, 0);\
		width: 100% !important;\
		opacity: 1;\
		z-index: "+settings.zIndex+";\
		position: relative;\
	}\
	.stickyHeader {\
		position: fixed;\
		-webkit-box-shadow: 0 0px 5px rgba(0,0,0,0.5);\
		box-shadow: 0 0px 5px rgba(0,0,0,0.5);\
		transition: transform "+duration+"ms ease-in,opacity "+duration+"ms ease-in;\
		transform: translate(0px, 80px);\
		margin-top: -80px !important;\
		backface-visibility: hidden;\
		opacity: "+settings.opacity+";\
		background:"+settings.backGround+";\
    }")
    .appendTo("head"); 
	return appendCss;   
    } 
}(jQuery));
