// スライダー
var slider = tns({
	container: '.my-slider',
	items: 1,
	edgePadding: 70,
	speed: 600,
	slideBy: 'page',
	responsive: {
		600: {
		  items: 2
		},
		900: {
		  items: 3
		}
  	},
	mouseDrag: true,
	navContainer: '#customize-thumbnails',
	controls: false,
//	autoplay: true,
//	autoplayTimeout: 5000,
//	autoplayButton: '#customize-toggle',
//	autoplayText: ['▶','❚❚']
  });

// Loading画面をウィンドウの高さを指定して表示させる
$(function() {
	var h = $(window).height();
	$('#mainWrap').css('display','none');
	$('.animationload').height(h).css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
	$('#loadering').delay(700).fadeOut(600);
	$('.animationload').delay(400).fadeOut(300);
	$('#mainWrap').css('display', 'block');
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
	setTimeout('stopload()',10000);
});
 
function stopload(){
	$('#wrap').css('display','block');
	$('#loader-bg').delay(900).fadeOut(800);
	$('#loader').delay(600).fadeOut(300);
}