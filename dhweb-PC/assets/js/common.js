// /*Open*/
// function openNav() {
//   document.getElementById("myNav").style.height = "100%";
//   // document.querySelector(".invisible-btn").style.opacity = "0%";
// }

// /* Close*/
// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
//   // document.querySelector(".invisible-btn").style.opacity = "100%";
// }

// /*Menu button invisible*/
// $('.close-btn').click(function() {
//   $('.invisible-btn').css({'opacity':'1','transition': '0.3s'});
// })
// $('.open-btn').click(function() {
//   $('.invisible-btn').css({'opacity':'0','transition': '0.3s'});
// })

$('.openBtn').click(function(){
  $(this).toggleClass('active');
  $('#gNav').toggleClass('panelActive');
  $('#gNav-content').addClass('panelActive');
});

$('#gNav-content li a').click(function(){
  $('.openBtn').removeClass('active');
  $('#gNav').removeClass('panelActive');
  $('#gNav-content').removeClass('panelActive');
});

/*Go to Top button*/
let topBtn = $('#scroll-top');
topBtn.hide();

$(window).scroll(function(){
	console.log($(this).scrollTop());
	console.log($(this).height());
	
	if($(this).scrollTop() > 1000) {
		topBtn.fadeIn(); 
	} else {
		topBtn.fadeOut(); 
	}
});

topBtn.on("click",function(event) {
	event.preventDefault();  
	$('body,html').animate({ 
			scrollTop: 0
	}, 500);
});

$('a[href^="#"]').click(function() {
  var speed = 2000;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top-20;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

// $(function(){
//   const mediaQuery = window.matchMedia('(max-width: 768px)');

//   // ページが読み込まれた時に実行
//   handle(mediaQuery);

//   // ウィンドウサイズが変更されても実行されるように
//   mediaQuery.addListener(handle);

//   function handle(mm) {
//     if (mm.matches) {
//       // ウィンドウサイズが798px以下のとき
//       window.location.href = 'https://www.google.jp/';
//     } else {
//       window.location.href = 'index.html';
//     }
//   }
// });