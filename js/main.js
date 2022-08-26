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

	//디자인 박스
	$('.banner-design').click(function(){
		$('#design-box').fadeIn().css({'display':'flex'});
	});
	$(document).mouseup(function (e){
		if($("#design-box").has(e.target).length === 0){
			$("#design-box").fadeOut();
		}
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

// var slide = new Swiper(".newArrival", {
// 	cssMode: true,
// 	slidesPerView: 1,
// 	spaceBetween: 20,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	pagination: {
// 		el: ".newArrival .swiper-pagination",
// 		clickable: true,
// 	},
// 	mousewheel: true,
// 	keyboard: true,
// 	});

var swiper = new Swiper(".mySwiper", {
	cssMode: true,
	loop: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	mousewheel: true,
	keyboard: true,
  });