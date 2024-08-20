(function ($) {
	("use strict")

	// :: preloader

	$(window).on('load', function () {
		$('#preloader-active').delay(450).fadeOut('slow');
		$('body').delay(450).css({
		});
	});

	// :: Menu
	if ($.fn.classyNav) {
		$('#onitaNav').classyNav({
			stickyNav: true,
		});
	}

	// :: Isotope
	if ($.fn.imagesLoaded) {
		$('.gallery-area').imagesLoaded(function () {
			var $grid = $('.gallery-area').isotope({
				itemSelector: '.col-12',
				percentPosition: true
			});
		});
	}

	// :: MagnificPopup video btn
	if ($.fn.magnificPopup) {
		$('.popup-video').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}

	// :: Countdown
	if ($.fn.countdown) {
		$("#clock").countdown("2024/09/15", function (event) {
			$(this).html(event.strftime("<div>%D <span>Day</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Mins</span></div> <div>%S <span>Secs</span></div>"));
		});
	}

	// :: Wow Js
	new WOW().init();

	// :: Welcome Slider Active
	if ($.fn.owlCarousel) {
		var welSlider1 = $('.wel-slider');
		welSlider1.owlCarousel({
			items: 1,
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed: 1200,
			margin: 70,
			dots: false,
			nav: true,
			navText : ["<span>Prev</span> <i class='icon-left-arrow'></i>","<i class='icon-l1eft-arrow'</i> <span>Next</span>"],

			responsive: {
				0: {
					items: 1,
				}
			}
		})
	}


	// :: Best Seller Slider Active
	if ($.fn.owlCarousel) {
		var partSlider1 = $('.best-seller-slider');
		partSlider1.owlCarousel({
			items: 4,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			margin: 30,
			dots: false,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				576: {
					items: 2,
				},
				992: {
					items: 3,

				},
				1200: {
					items: 4,

				}
			}
		})
	}

	// :: Gallery Slider Active
	if ($.fn.owlCarousel) {
		var partSlider1 = $('.gallery-area-3');
		partSlider1.owlCarousel({
			items: 8,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			margin: 0,
			dots: false,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				480: {
					items: 2,
				},
				576: {
					items: 4,
				},
				992: {
					items: 5,

				},
				1200: {
					items: 8,

				}
			}
		})
	}


	// :: Partner Slider Active
	if ($.fn.owlCarousel) {
		var partSlider1 = $('.partner-image-area');
		partSlider1.owlCarousel({
			items: 5,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			margin: 100,
			dots: false,
			nav: false,
			responsive: {
				0: {
					items: 2,
					margin: 30,
				},
				576: {
					items: 4,
					margin: 40,
				},
				992: {
					items: 4,

				},
				1200: {
					items: 5,

				}
			}
		})
	}

	// :: Partner Slider 2 Active
	if ($.fn.owlCarousel) {
		var partSlider3 = $('.partner-area-2');
		partSlider3.owlCarousel({
			items: 5,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			margin: 200,
			dots: false,
			nav: false,
			responsive: {
				0: {
					items: 2,
					margin: 70,
				},
				480: {
					items: 3,
					margin: 50,
				},
				576: {
					items: 3,
					margin: 50,
				},
				992: {
					items: 4,

				},
				1200: {
					items: 5,

				}
			}
		})
	}

	// :: Featured  Slider Active
	if ($.fn.owlCarousel) {
		var partSlider2 = $('.featurs-slider-2');
		partSlider2.owlCarousel({
			items: 4,
			loop: true,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 1500,
			margin: 30,
			dots: false,
			nav: true,
			responsive: {
				0: {
					items: 1,
				},
				576: {
					items: 2,
				},
				992: {
					items: 3,

				},
				1200: {
					items: 4,

				}
			}
		})
	}


	// :: Trending  Slider Active
	if ($.fn.owlCarousel) {
		var partSlider2 = $('.trending-slider');
		partSlider2.owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 1500,
			margin: 0,
			dots: false,
			nav: true,
			responsive: {
				0: {
					items: 1,
				},
			}
		})
	}

	// :: Hot Deals Slider Active
	if ($.fn.owlCarousel) {
		var partSlider3 = $('.hot-deal-slider');
		partSlider3.owlCarousel({
			items: 3,
			loop: true,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 1500,
			margin: 30,
			dots: false,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				480: {
					items: 1,
				},
				576: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,

				}
			}
		})
	}


})(jQuery);


