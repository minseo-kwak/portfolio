$(function(){
    $('.btn-nav').click(function(){
        $('.bg-nav').fadeIn();
    });
    $('.btn-nav-close').click(function(){
        $('.bg-nav').fadeOut();
    });

    $('.btn-back').click(function(){
        location.href = 'index.html'
    });

    var wd = $(window).width();

    if(wd <= 768) {
        $('.bg-nav li a').click(function(){
            $('.bg-nav').fadeOut();
        })
    }

    // $(window).resize(function(){
    //     location.reload();
    // });
    
    // 메뉴 스크롤 막기
	$('.bg-nav').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	});

    // 하트
    $('.name').hover(function(){
		$(this).stop().css({'transform':'scaleY(-1)', 'transition':'0.8s'});
		$('.heart').stop().fadeIn(800);
	}, function(){
		$(this).stop().css({'transform':'scaleY(1)', 'transition':'0.8s'})
		$('.heart').stop().fadeOut(800);
	})

    // 화면 전환 시 부드럽게
    $("body").css("display", "none");
    $("body").fadeIn(1200);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});