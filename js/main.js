$(function(){
	"use strict";
  
	var siteIstotope = function() {
		var $container = $('#portfolio-grid').isotope({
		  itemSelector : '.item',
		  isFitWidth: true
		});
  
		$(window).resize(function(){
		  $container.isotope({
			columnWidth: '.col-sm-3'
		  });
		});
		
		$container.isotope({ filter: '*' });
  
		$('#filters').on('click', 'a', function(e){
		  e.preventDefault();
		  var filterValue = $(this).attr('data-filter');
		  $container.isotope({ filter: filterValue });
		  $('#filters a').removeClass('active');
		  $(this).addClass('active');
		});
	}

	$(window).on('load', function () {
	  siteIstotope();
	});

	$('.name').hover(function(){
		$(this).stop().css({'transform':'scaleY(-1)', 'transition':'0.8s'});
		$('.heart').stop().fadeIn(800);
	}, function(){
		$(this).stop().css({'transform':'scaleY(1)', 'transition':'0.8s'})
		$('.heart').stop().fadeOut(800);
	})

	//hover animation
	if($(window).width() > 768) {
		$('.list .i_list img').hover(function(){
			$(this).siblings('.arrow_box').fadeIn(500);
		}, function(){
			$(this).siblings('.arrow_box').fadeOut(500);
		});
	}
	
});

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});
