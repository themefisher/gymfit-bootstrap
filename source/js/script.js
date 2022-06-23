(function ($) {
	'use strict';

	$(window).scroll(function () {
		if ($('.navigation').offset().top > 100) {
			$('.navigation').addClass('fixed-nav');
		} else {
			$('.navigation').removeClass('fixed-nav');
		}
	});


	$('.portfolio-gallery').each(function () {
		$(this).find('.popup-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});


	$('#contact-form').validate({
		rules: {
			user_name: {
				required: true,
				minlength: 4
			},
			user_email: {
				required: true,
				email: true
			},
			// user_subject: {
			// 	required: false
			// },
			user_message: {
				required: true
			}
		},
		messages: {
			user_name: {
				required: 'Come on, you have a name don\'t you?',
				minlength: 'Your name must consist of at least 2 characters'
			},
			user_email: {
				required: 'Please put your email address'
			},
			user_message: {
				required: 'Put some messages here?',
				minlength: 'Your name must consist of at least 2 characters'
			}

		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: 'POST',
				data: $(form).serialize(),
				url: 'sendmail.php',
				success: function () {
					$('#contact-form #success').fadeIn();
				},
				error: function () {

					$('#contact-form #error').fadeIn();
				}
			});
		}
	});



	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});




	// Init Magnific Popup
	$('.portfolio-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		navigateByImgClick: true,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});

})(jQuery);