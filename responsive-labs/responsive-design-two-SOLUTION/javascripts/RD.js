$(window).on("resize", function(){
	console.info("resize triggered");
	var $this = this,
		current_width = parseInt($this.outerWidth, 10);
	RD.resizedWindow(current_width);
});


var RD = (function(){
	function _return_public(){
		return{
			init: init,
			resizedWindow: resizedWindow
		}
	}
	
	function init(){
		console.log("RD::init: Starting up the app");
	}
    
	/*----------private-----------*/
	
	
	/**
		 * Resized Window
		 * 
		 * The window was resized so change the layout
		 * 
		 * @param String current_width
		 *
		 * @return null
		 */
		function resizedWindow(width){
			var size = "out_of_bounds";
			//console.log("RS::resizedWindow");
			if(width <= 800){
				size = "large";
			}
			if(width <= 600){
				size = "small";
			}
			if(width <= 400){
				size = "very_small";
			}
			console.info("type: " + typeof(width));
			$("body").removeClass().addClass(size);
			console.log("width: " + width + " to " + size);
			return null;
		};
	
	
	return _return_public();
})();

