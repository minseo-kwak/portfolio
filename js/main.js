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

	$('.name').mouseover(function(){
		$(this).stop().css({'transform':'scaleY(-1)', 'transition':'0.8s'})
		$('.heart').stop().fadeIn(800);
	});
	$('.name').mouseout(function(){
		$(this).stop().css({'transform':'scaleY(1)', 'transition':'0.8s'})
		$('.heart').stop().fadeOut(800);
	});

	//hover animation
	$('.list .design img').mouseover(function(){
		$('.box01').stop().fadeIn(500);
	});
	$('.list .design img').mouseout(function(){
		$('.box01').stop().fadeOut(500);
	});

	$('.list .framework img').mouseover(function(){
		$('.box02').stop().fadeIn(500);
	});
	$('.list .framework img').mouseout(function(){
		$('.box02').stop().fadeOut(500);
	});

	$('.list .code img').mouseover(function(){
		$('.box03').stop().fadeIn(500);
	});
	$('.list .code img').mouseout(function(){
		$('.box03').stop().fadeOut(500);
	});
	
});

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});
