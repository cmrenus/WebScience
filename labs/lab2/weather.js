var x = document.getElementById("noSupport");
$(document).ready(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    /*x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; */
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&APPID=54ec9e8575418b49cbed856848666531';
		//console.log(url);
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);
		$.ajax({
			url: url,
			method: 'GET',
			dataType:"jsonp",
		}).then(function(data){
			console.log(data);
			temp = data.main.temp - 273.16;
			temp = temp *1.8 + 32;
			if(temp > 85){
				$('.jumbotron > h1').html("Its Really Hot Out!<span class='glyphicon glyphicon-fire' aria-hidden='true'></span>");
			}
			else if(temp > 70){
				$('.jumbotron > h1').html("Its Hot Out!");
			}
			else if(temp > 60){
				$('.jumbotron > h1').html("Its Warm Out!");
			}
			else if(temp > 50){
				$('.jumbotron > h1').html("Its Alright Out!");
			}
			else if(temp > 20){
				$('.jumbotron > h1').html("Its Cold Out!");
			}
			else{
				$('.jumbotron > h1').html("Its Really Cold Out!");
			}
			$("#temperature").html('Temp: ' + Math.round(temp) + '<sup>&#176;F</sup>');
			console.log(temp);
		});


}