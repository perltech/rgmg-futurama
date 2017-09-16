$(document).ready(function() {
	$('#btn-start').on('click', function(){
	//Gif generation goes here
	var queryURL = 'https://api.giphy.com/v1/gifs/random?tag=futurama&api_key=dc6zaTOxFJmzC&limit=1';

	$.get(queryURL)
		.done(function(response){
			var img = $('<img>');
			// var div = $('div');
			var results = response.data;

			img.attr('src', results.image_original_url);
			$("#gif").html(img);
			// $("#gif").append(div);
		});
});


var hypnoToad = 0;

$('#hypno').on('click', function(){
	//Gif generation goes here
	var queryURL = 'https://api.giphy.com/v1/gifs/random?tag=futurama&api_key=dc6zaTOxFJmzC&limit=1';
	
	$('#hypno-gif').empty();

	sessionStorage.getItem('hypnoToad', hypnoToad);
	hypnoToad++;		
	sessionStorage.setItem('hypnoToad', hypnoToad);

	if(sessionStorage.hypnoToad == 5) {
		// This isn't going to right object
		// Jump down and select the correct variable by using some kind of logic to determine which
		// Argument gets passed into $.get() function
		queryURL = 'https://api.giphy.com/v1/gifs/search?q=hypno+toad&api_key=dc6zaTOxFJmzC&limit=1'
	}

		$.get(queryURL)
			.done(function(response){
				
				for (i=0; i < 250; i++) {
					var img = $('<img>');
					//var div = $('<div>');
					var results = response.data;
				
					img.attr('src', results.image_original_url);
					img.addClass("sm-gif");
					//div.append(img);
					$("#hypno-gif").append(img);
				}
			});

	
	

});

});