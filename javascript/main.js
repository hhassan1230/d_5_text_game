$("document").ready(function(){
  // var text = ;
  var obj = {},
  whereAmI = "";
  $.getJSON("./javascript/text.json", function(json) {
    var obj = json;
    $(".yeah button, .nah button, .maybe button").on("click", function(){
      var newScene = "<h1>" + obj.start["text"] + "</h1>";
      var currentChoice = "<section id='choice'>"
      for (var i = 0; i < obj.start["choice"].length; i++) {
				var key = Object.keys(obj.start["choice"][i]);
				currentChoice += "<button class='"+ key +"'>"+ obj.start["choice"][i][key] +"</button> ";	
      };
      currentChoice += "</section>";
    	var choice = $(this).attr('class');
			switch (choice) { 
				case 'maybeStart': 
					var maybe = "<h1>We'll also take that as a yes...</h1>";
					$('.scene').html(maybe);
		    	setTimeout(function() {
						$('.scene').html(newScene + currentChoice);
					}, 2000);
					break;
				case 'dontStart': 
					var no = "<h1>We'll take that as a yes...</h1>";
					$('.scene').html(no);
					
					setTimeout(function() {
						$('.scene').html(newScene + currentChoice);
					}, 2000);
					break;
				default:
					$('.scene').html(newScene + currentChoice);
			}
			var newStoryJson = {};

			// obj
			// for (var key in obj) {
  	// 			debugger;
			// }
      
			$( "#choice" ).on( "click", "button", function( event ) {
			    event.preventDefault();
			    sceneHash = obj[this.className];
			    var newScene = "<h1>" + sceneHash["text"] + "</h1>";
      		var currentChoice = "<section id='choice'>"
		      for (var i = 0; i < sceneHash["choice"].length; i++) {
						var key = Object.keys(sceneHash["choice"][i]);
						currentChoice += "<button class='"+ key +"'>"+ sceneHash["choice"][i][key] +"</button> ";	
		      };
		      currentChoice += "</section>";

					// debugger;
			    // console.log( $( this ).text() );
			    $('.scene').html(newScene + currentChoice);
			});
    });
		
		// $("button").on("click", function(){
		// 	var choice = $(this).attr('class');
		// 	debugger;
		// 	if ((choice !== "maybeStart") && (choice !== "dontStart") && (choice !== "startGame") ) {
		// 		debugger;
				
		// 	};
		// });
	});
  
})

