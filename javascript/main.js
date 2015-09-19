$("document").ready(function(){
  
 
    $("button").on("click", function(){
      var newScene = "<h1>Start of Game</h1>";
    	var choice = $(this).attr('class');
			switch (choice) { 
				
				case 'maybeStart': 
					var maybe = "<h1>We'll also take that as a yes...</h1>";

					$('.scene').html(maybe);
		    	// debugger;
		    	window.setTimeout($('.scene').html(newScene), 200000);
					// $('.scene').delay( 80000 ).html(newScene);
					break;
				case 'dontStart': 
					var no = "<h1>We'll take that as a yes...</h1>";

					$('.scene').html(no);
					// $('.scene').delay( 80000 ).html(newScene);
					break;
				default:
					$('.scene').html(newScene);
			}
      
    });
  
})