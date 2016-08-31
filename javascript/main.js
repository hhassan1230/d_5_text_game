$("document").ready(function(){
  var obj = {},
  whereAmI = "";
  $.getJSON("./javascript/text.json", function(json) {
	  var obj = json;
		$(document).on("click", "button", function(){
			if (this.className === "dontStart" || this.className === "startGame" || this.className === "maybeStart") {
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
			} else{
				var sceneHash = obj[this.className];
		    var newScene = "<h1>" + sceneHash["text"] + "</h1>";
		    var currentChoice = "<section id='choice'>"
	      for (var i = 0; i < sceneHash["choice"].length; i++) {
					var key = Object.keys(sceneHash["choice"][i]);
					currentChoice += "<button class='"+ key +"'>"+ sceneHash["choice"][i][key] +"</button> ";
	      };
	     	currentChoice += "</section>";
		    $('.scene').html(newScene + currentChoice);
			};
		});
	});
})

