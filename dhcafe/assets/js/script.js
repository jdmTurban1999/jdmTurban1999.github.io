//スムーズスクロール
$('a[href^="#"]').click(function() {
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
});

//上へ戻るボタン
let topBtn = $('#scroll-top');
topBtn.hide();

// ある程度スクロールされたら、上に戻るボタンを表示する
$(window).scroll(function(){
	console.log($(this).scrollTop());
	console.log($(this).height());
	
	if($(this).scrollTop() > 1000) {
		topBtn.fadeIn(); // フェードインで表示
	} else {
		topBtn.fadeOut(); // フェードアウトで非表示
	}
});

topBtn.on("click",function(event) {
    event.preventDefault();  // ページ内リンクの挙動をキャンセル
    $('body,html').animate({ // スムーズにスクロールする設定
        scrollTop: 0
    }, 500);
});