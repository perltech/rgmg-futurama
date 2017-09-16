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

$('#hypno').on('click', function(){
	//Gif generation goes here
	var queryURL = 'https://api.giphy.com/v1/gifs/random?tag=futurama&api_key=dc6zaTOxFJmzC&limit=1';
	var hypnoToad = 0;

	sessionStorage.setItem('hypnoToad', hypnoToad);
	$('#hypno-gif').empty();
	hypnoToad++;		

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

	
	if(hypnoToad == 5) {
		$('#hypno-gif').empty();
		queryURL = 'https://api.giphy.com/v1/gifs/random?tag=hypno+toad&api_key=dc6zaTOxFJmzC&limit=1'
	}

});

});