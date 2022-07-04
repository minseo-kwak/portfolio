$(function(){
    $('.btn-nav').click(function(){
        $('.bg-nav').fadeIn();
    });
    $('.btn-nav-close').click(function(){
        $('.bg-nav').fadeOut();
    });

    var wd = $(window).width();

    if(wd <= 768) {
        $('.bg-nav li a').click(function(){
            $('.bg-nav').fadeOut();
        })
    }

    $(window).resize(function(){
        location.reload();
    });
    
    // 팝업 스크롤 막기
	$('.bg-nav').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	});
});