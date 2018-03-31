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
	controls: false
  });