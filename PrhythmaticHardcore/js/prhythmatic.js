$(function() {
	$("body").queryLoader2({
		barColor: "rgb(240, 20, 20)",
		backgroundColor: "#111",
		barHeight: 2,
	});
	
    
});

document.addEventListener('DOMContentLoaded', function(){
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
        ease: 'easeInQuad'
      }, easeFunctions);
      const triggers = document.getElementsByClassName('js-trigger');
      for (var i = 0; i < triggers.length; i++) {
        moveTo.registerTrigger(triggers[i]);
      }
    });