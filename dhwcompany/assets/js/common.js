/*
document.querySelector('.open-button').onclick = function () {
    document.querySelector('.nav').style.width = "70%";
}

document.querySelector('.close-button').onclick = function () {
    document.querySelector('.nav').style.width = "0";
}
*/

//slideMenu animation


$(function () {
    $('.open-button').on("click", function() {
        $('.nav').css({'width' : '70%', 'display' : 'block'});
    });

    $('.close-button').on("click", function() {
        $('.nav').css({'width' : '0'});
    });
});

$(function() {
    $("#open-button").on("click", function() {
      $(".fadeIn").fadeIn(900);
    });
  
    $("#close-button").on("click", function() {
      $(".fadeOut").hide(300);
    });
});

$('#slick-slide').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	arrows: false,
    fade: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    waitForAnimate: false
});

// function animation(){
// 	$('.animate__animated').each(function(){
// 		//ターゲットの位置を取得
// 		let target = $(this).offset().top;
// 		//スクロール量を取得
// 		let scroll = $(window).scrollTop();
// 		//ウィンドウの高さを取得
// 		let windowHeight = $(window).height();
// 		//ターゲットまでスクロールするとフェードインする
// 		if (scroll > target - windowHeight + (windowHeight / 2)){
// 			$('.animate__animated').css('opacity','1');
// 		}
// 	});
// }

// $(window).scroll(function(){
//     animation(6000);
// });

$(window).on('load scroll', function(){

    let elem = $('.animated');
  
    elem.each(function () {
  
      let isAnimate = $(this).data('animate');
      let elemOffset = $(this).offset().top;
      let scrollPos = $(window).scrollTop();
      let wh = $(window).height();
  
      if(scrollPos > elemOffset - wh + (wh / 2)){
        $(this).addClass(isAnimate);
      }else{
        $(this).removeClass(isAnimate);
      }
    });
  
  });