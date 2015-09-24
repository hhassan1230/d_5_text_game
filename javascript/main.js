$("document").ready(function(){
  // var text = ;
  var obj = {};
  $.getJSON("./javascript/text.json", function(json) {
		// debugger;
    var obj = json;
    $("button").on("click", function(){
      var newScene = "<h1>" + obj.start["text"] + "</h1>";
    	var choice = $(this).attr('class');
			switch (choice) { 
				case 'maybeStart': 
					var maybe = "<h1>We'll also take that as a yes...</h1>";

					$('.scene').html(maybe);
		    	// debugger;
		    	setTimeout(function() {
						$('.scene').html(newScene);
					}, 2000);
					// $('.scene').delay( 80000 ).html(newScene);
					break;
				case 'dontStart': 
					var no = "<h1>We'll take that as a yes...</h1>";
					$('.scene').html(no);
					
					setTimeout(function() {
						$('.scene').html(newScene);
					}, 2000);
					// $('.scene').delay(8000),.html(no)//.delay( 8000 ).html(newScene);
					// debugger;

					// $('.scene').html(newScene);
					break;
				default:
					$('.scene').html(newScene);
			}
      
    });
	});
  
})