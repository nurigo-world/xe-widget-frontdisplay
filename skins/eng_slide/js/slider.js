(function($){
	jQuery(function($) {
		$('.bxslider').bxSlider({
			slideWidth: g_slideWidth,
			minSlides: 1,
			maxSlides: g_maxSlides,
			moveSlides: 1,
			slideMargin: 10,
			auto: true,
			pause: 2000,
			pagerCustom: '#',
			autoHover:true,
			onSliderLoad: function() { jQuery('ul.bxslider li').css('display', 'block'); }
		});

		$('.bx-wrapper .bx-controls-direction a').hide();
		$('.bx-wrapper').mouseover(function() {
			$('.bx-wrapper .bx-controls-direction a').show();
		}).mouseout(function() {
			$('.bx-wrapper .bx-controls-direction a').hide();
		});
	});
})(jQuery);
