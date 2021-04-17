
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title> Top Page Shop </title>
        <!-- Librerias Plantilla Start -->
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
	        <meta name="description" content="">
	        <meta name="viewport" content="width=device-width, initial-scale=1">
		
			<!-- Fav icon -->
	        <link rel="shortcut icon" href="view/img/favicon.ico">
        <!-- Librerias Plantilla End -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.css" />

    	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>


		    <!-- Librerias Plantilla Start -->
			<!-- Font -->
            <link href='https://fonts.googleapis.com/css?family=Lato:400,400italic,900,700,700italic,300' rel='stylesheet' type='text/css'>
            <link href='http://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700%7CDancing+Script%7CMontserrat:400,700%7CMerriweather:400,300italic%7CLato:400,700,900' rel='stylesheet' type='text/css' />
            <link href='http://fonts.googleapis.com/css?family=Cantata+One' rel='stylesheet' type='text/css' />
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700,600' rel='stylesheet' type='text/css'>
            <link href='http://fonts.googleapis.com/css?family=Ubuntu:400,300,500,700' rel='stylesheet' type='text/css'> 
            <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
             <link rel="stylesheet" href="view/css/bootstrap.min.css">
             	

            <!--flex slider stylesheet-->
            <link rel="stylesheet" href="view/css/flexslider.css" />
            <!--lightbox stylesheet-->
            <link rel="stylesheet" href="view/css/image-light-box.css" />

            <!-- top page plantillas -->
            <link rel="stylesheet" href="view/css/font-awesome.min.css">
            <link rel="stylesheet" href="view/css/normalize.css">
            <link rel="stylesheet" href="view/css/skin-lblue.css">

            <link rel="stylesheet" href="view/css/ecommerce.css">

            <!-- Owl carousel -->
            <link href="view/css/owl.carousel.css" rel="stylesheet">
            
            <link rel="stylesheet" href="view/css/main.css">
	        <link rel="stylesheet" href="view/style.css">
	        <link rel="stylesheet" type="text/css" href="view/css/revolutionslider_settings.css" media="screen" />
	        <link rel="stylesheet" href="view/css/setting.css">
            <link rel="stylesheet" href="view/css/responsive.css">
	        <script src="view/js/vendor/modernizr-2.6.2.min.js"></script>
            
             <!-- All script -->
            <script src="view/js/vendor/jquery-1.10.2.min.js"></script>
            <script src="view/js/bootstrap.min.js"></script>
            <script src="view/js/smoothscroll.js"></script>

            <!-- Scroll up js ============================================ -->
            <script src="view/js/jquery.scrollUp.js"></script>
            <script src="view/js/menu.js"></script>

           


            <!-- SLIDER REVOLUTION SCRIPTS  -->
            <script type="text/javascript" src="view/rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
            <script type="text/javascript" src="view/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
            
            <script src="view/js/flexslider/jquery.flexslider-min.js"></script>
            <script src="view/js/image-lightbox/imagelightbox.js"></script>

            <!-- Owl carousel -->
            <script src="view/js/owl.carousel.min.js"></script>
            <script src="view/js/main.js"></script>
       
		<!-- Scripts Plantilla END -->
        

	    <link href="view/css/style.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript" src="view/inc/translate.js"></script>
        <script src="module/shop/model/controller_shop.js"></script>
        <script src="module/search/view/controller_search.js"></script>
        <script src="module/shop_detail/view/controller_shop_detail.js"></script>
		<script src="module/login/view/controller_login.js"></script>
		<script src="module/login/view/controller_register.js"></script>
        <script src="view/js/ajax_promise/ajax_promise.js"></script>
		<script src="init.js"></script>
        
        <script type="text/javascript">
	/*-----------------------------------------------------------------------------------*/
	/* Flex Slider
	 /*-----------------------------------------------------------------------------------*/
	if (jQuery().flexslider) {

		// Product Page Flex Slider
		$('.product-slider').flexslider({
			animation: "slide",
			animationLoop: false,
			slideshow: false,
			prevText: '<i class="fa fa-angle-left"></i>',
			nextText: '<i class="fa fa-angle-right"></i>',
			animationSpeed: 250,
			controlNav: "thumbnails"
		});

	}


	/*-----------------------------------------------------------------------------------*/
	/* Product Carousel
	 /*-----------------------------------------------------------------------------------*/
	if (jQuery().owlCarousel) {
		var productCarousel = $("#product-carousel");
		productCarousel.owlCarousel({
			loop: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				900: {
					items: 3
				},
				1100: {
					items: 4
				}
			}
		});

		// Custom Navigation Events
		$(".product-control-nav .next").on("click", function() {
			productCarousel.trigger('next.owl.carousel');
		});

		$(".product-control-nav .prev").on("click", function() {
			productCarousel.trigger('prev.owl.carousel');
		});
	}



	/*-----------------------------------------------------------------------------------*/
	/* Tabs
	 /*-----------------------------------------------------------------------------------*/
	$(function() {
		var $tabsNav = $('.tabs-nav'),
				$tabsNavLis = $tabsNav.children('li');

		$tabsNav.each(function() {
			var $this = $(this);
			$this.next().children('.tab-content').stop(true, true).hide()
					.first().show();
			$this.children('li').first().addClass('active').stop(true, true).show();
		});

		$tabsNavLis.on('click', function(e) {
			var $this = $(this);
			$this.siblings().removeClass('active').end()
					.addClass('active');
			var idx = $this.parent().children().index($this);
			$this.parent().next().children('.tab-content').stop(true, true).hide().eq(idx).fadeIn();
			e.preventDefault();
		});

	});


	/*-----------------------------------------------------------------------------------*/
	/*	Tabs Widget
	 /*-----------------------------------------------------------------------------------*/
	$('.footer .tabbed .tabs li:first-child, .tabbed .tabs li:first-child').addClass('current');
	$('.footer .block:first, .tabbed .block:first').addClass('current');


	$('.tabbed .tabs li').on("click", function() {
		var $this = $(this);
		var tabNumber = $this.index();

		/* remove current class from other tabs and assign to this one */
		$this.siblings('li').removeClass('current');
		$this.addClass('current');

		/* remove current class from current block and assign to related one */
		$this.parent('ul').siblings('.block').removeClass('current');
		$this.closest('.tabbed').children('.block:eq(' + tabNumber + ')').addClass('current');
	});



	/*-----------------------------------------------------------------------------------*/
	/*	Image Lightbox
	 /*  http://osvaldas.info/image-lightbox-responsive-touch-friendly
	 /*-----------------------------------------------------------------------------------*/
	if (jQuery().imageLightbox) {

		// ACTIVITY INDICATOR

		var activityIndicatorOn = function() {
					$('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
				},
				activityIndicatorOff = function() {
					$('#imagelightbox-loading').remove();
				},


		// OVERLAY

				overlayOn = function() {
					$('<div id="imagelightbox-overlay"></div>').appendTo('body');
				},
				overlayOff = function() {
					$('#imagelightbox-overlay').remove();
				},


		// CLOSE BUTTON

				closeButtonOn = function(instance) {
					$('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo('body').on('click touchend', function() {
						$(this).remove();
						instance.quitImageLightbox();
						return false;
					});
				},
				closeButtonOff = function() {
					$('#imagelightbox-close').remove();
				},

		// ARROWS

				arrowsOn = function(instance, selector) {
					var $arrows = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>');

					$arrows.appendTo('body');

					$arrows.on('click touchend', function(e) {
						e.preventDefault();

						var $this = $(this),
								$target = $(selector + '[href="' + $('#imagelightbox').attr('src') + '"]'),
								index = $target.index(selector);

						if ($this.hasClass('imagelightbox-arrow-left')) {
							index = index - 1;
							if (!$(selector).eq(index).length)
								index = $(selector).length;
						} else {
							index = index + 1;
							if (!$(selector).eq(index).length)
								index = 0;
						}

						instance.switchImageLightbox(index);
						return false;
					});
				},
				arrowsOff = function() {
					$('.imagelightbox-arrow').remove();
				};

		// Lightbox for individual image
		var lightboxInstance = $('a[data-imagelightbox="lightbox"]').imageLightbox({
			onStart: function() {
				overlayOn();
				closeButtonOn(lightboxInstance);
			},
			onEnd: function() {
				closeButtonOff();
				overlayOff();
				activityIndicatorOff();
			},
			onLoadStart: function() {
				activityIndicatorOn();
			},
			onLoadEnd: function() {
				activityIndicatorOff();
			}
		});

		// Lightbox for product gallery
		var gallerySelector = 'a[data-imagelightbox="gallery"]';
		var galleryInstance = $(gallerySelector).imageLightbox({
			quitOnDocClick: false,
			onStart: function() {
				overlayOn();
				closeButtonOn(galleryInstance);
				arrowsOn(galleryInstance, gallerySelector);
			},
			onEnd: function() {
				overlayOff();
				closeButtonOff();
				arrowsOff();
				activityIndicatorOff();
			},
			onLoadStart: function() {
				activityIndicatorOn();
			},
			onLoadEnd: function() {
				activityIndicatorOff();
				$('.imagelightbox-arrow').css('display', 'block');
			}
		});

	}



</script>
    </head>
    <body>