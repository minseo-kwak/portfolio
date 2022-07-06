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

	//hover animation
	if($(window).width() >= 768) {
		$('.list .i_list img').hover(function(){
			$(this).siblings('.arrow_box').fadeIn(500);
		}, function(){
			$(this).siblings('.arrow_box').fadeOut(500);
		});
	}
	
});
