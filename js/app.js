$(document).ready(function(){



});


$(window).load(function(){
	console.log('window ready');
	avant.matchHeight();

})



$(window).resize(function(){

	avant.matchHeight();
})


var avant = avant || {}

//uses data attributes to match an element to another elements size, relative to its percentage;
avant.matchHeight = function(){
		console.log($('.watch-this').height());
	if($(window).width() >= 1024){

		var el = $('.match-height');
		el.each(function(i,e){

			var height = $(this).data('height');

			var nearest = $($(this).data('watch')).height();
			$(e).height((nearest / 100) * height);
			
		})
	}
}


avant.fullHeight = function(){




}


