

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