var RD = (function(){
	function _return_public(){
		return{
			init: init
		}
	}
	
	function init(){
		console.log("RD::init: Starting up the app");
	}
	
	/*----------private-----------*/
	

	
	
	
	/**
	 * _Resized Window
	 * 
	 * The window was resized so change the layout
	 * 
	 * @return null
	 */
	function _resizedWindow(resized_event){
		console.log("RS::resizedWindow");
		switch(resized_event.media){
			case "(min-width: 800px)":
				console.info("800");
				$("body").toggleClass("large");
			break;
			
			case "(min-width: 600px)":
				console.info("600");
				$("body").toggleClass("small");
			break;
			
			case "(min-width: 400px)":
				console.info("400");
				$("body").toggleClass("very_small");
			break;
			default:
				alert("something else");
			break;
		}
		
		console.dir(resized_event)
		return null;
	};
	
	
	if(!window.matchMedia){
		console.warn("your browser does not support match media");
		return;
	}else{
		var _mq_large = window.matchMedia("(min-width: 800px)"),
			_mq_small = window.matchMedia("(min-width: 600px)"),
			_mq_very_small = window.matchMedia("(min-width: 400px)");
			
			/*
				_mq_portrait = window.matchMedia("(orientation: portrait)"),
				_mq_landscape = window.matchMedia("(orientation: landscape)");
			*/
			
			/*set up handlers*/
			
			_mq_large.addListener(_resizedWindow);
			_mq_small.addListener(_resizedWindow);
			_mq_very_small.addListener(_resizedWindow);
	}
	
	
	return _return_public();
})();

