$(document).ready(function () {
	$(".read-more").click(function (e) {
		e.preventDefault();
		$(this).parent().toggleClass("xp-open");
		$(this).toggleClass("read-less");
	});
	$('.navbar-nav .nav-item a[href^="#"]').click(function (e) {
		e.preventDefault();
		var target = this.hash;
		var headerHeight = $('.navbar').height();
		$target = $(target);
		console.log($target);
		$('html, body').animate({
			'scrollTop': Math.ceil($target.offset().top)
		}, 500, 'swing');
	});
	$('.modal-body .list-group a[href^="#"]').click(function (e) {
		e.preventDefault();
		$("#modalNavigation").modal('hide');
		var target = this.hash;
		var headerHeight = $('.navbar').height();
		$target = $(target);
		console.log($target);
		$('html, body').animate({
			'scrollTop': Math.ceil($target.offset().top)
		}, 500, 'swing');
	});
	var headerHeight = $('.navbar').height();
	var onScroll = function () {
		var scrollPos = $(document).scrollTop();
		var contWrapPos = $("#scroll-contents").offset().top;
		if (scrollPos > contWrapPos) {
			$(".navbar").addClass("fixed");
			$("#contents").addClass("nav-fixed");
			$(".move-top").addClass("fixed");
		} else if (scrollPos <= contWrapPos + 15) {
			$(".navbar").removeClass("fixed");
			$("#contents").removeClass("nav-fixed");
			$(".move-top").removeClass("fixed");
		}
}
//tab메뉴 스크롤고정
$(window).on("scroll", onScroll);
onScroll();

// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
// 	event.preventDefault();
// 	$(this).ekkoLightbox();
// });
	$(".btn-fullscreen").click(function (e) {
		e.preventDefault();
		toggleFullScreen();
		$(this).parent().toggleClass("xp-fullscreen");
	});
	
	$(document).keyup(function(e) {
		if (e.key === 'Escape') { 
			$('.fullscreen-wrap').removeClass("xp-fullscreen");
		}
	});
});
function toggleFullScreen() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
		if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
		document.documentElement.mozRequestFullScreen(); // Firefox
		} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(); // Chrome and Safari
		} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen(); // IE
		}

//Toggle fullscreen on, exit fullscreen
} else {

		if (document.exitFullscreen) {
				document.exitFullscreen();
		} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
		}
}
}