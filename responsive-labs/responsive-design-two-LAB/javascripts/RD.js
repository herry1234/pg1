/*
listen for the resize event on the window using jquery and call a 
resizedWindow function passing the current width of the widow
*/


//hint you will need this in your event handler 
//current_width = parseInt($this.outerWidth, 10);

$(window).on("resize", function(){
    console.info("resize");
	var $this = this,
		current_width = parseInt($this.outerWidth, 10);
	RD.resizedWindow(current_width);
});

var RD = (function(){
	function _return_public(){
		return{
			init: init,
			//release a resizedWindow function as we call it outside of the RD namespace
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
			//if width is less than or equal to 600
            if(width <= 600){
				size = "small";
			}
			if(width <= 400){
				size = "very_small";
			}
			//remove all classes from the body and add the right one
			console.log("width: " + width + " to " + size);
			return null;
		};
	
	
	return _return_public();
})();

