// Weather API. Ricardo Elias. 2012.


//jquery start
$(function(){
	$.ajax({
		url: "http://api.wunderground.com/api/b2b4b0fe6d0d43e1/geolookup/conditions/forecast/q/autoip.json",
		dataType: "jsonp",
		success: function(parsed_json) {
			var temp_f = parsed_json['current_observation']['temp_f'];
				$('#weather').append("<span>"+"The weather today: " +temp_f+ " degrees" + "</span>")		}
	});
	

		 });//jquery end
