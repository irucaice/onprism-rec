$(function() {
	$("body").queryLoader2({
		barColor: "rgb(81, 210, 227)",
		backgroundColor: "#111",
		barHeight: 2,
	});

    // ヘッダーメニューのスムーススクロール
    const easeFunctions = {
        easeInQuad: function (t, b, c, d) {
            t /= d;
            return c * t * t + b;
        },
        easeOutQuad: function (t, b, c, d) {
            t /= d;
            return -c * t* (t - 2) + b;
        }
    }
    const moveTo = new MoveTo({
        tolerance: $('header').height() - 1,
        ease: 'easeInQuad'
    }, easeFunctions);
    const triggers = $('.js-trigger');
    for (var i = 0; i < triggers.length; i++) {
        moveTo.registerTrigger(triggers[i]);
    }
});