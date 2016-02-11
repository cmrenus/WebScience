$.getJSON("tweetsFromTwitter.json", function(data){
	
	//insert the initial tweets into the page
	for(var x = 0; x < 5; x++){
		$('#tweets').append('<li class="panel tweet container-fluid"><div class="col-xs-12"><div class="center-block col-md-2"><img class="center-block" src="' + data[x].user.profile_image_url + '"></div><div class="text col-md-10">' + data[x].text + '</div></div></li>');
	}

	//insert the initial usernames into the page
	for(var x = 0; x < 5; x++){
		$('#TwitterNames').append('<li class="twitterName panel panel-primary"><div class="panel-heading"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> '+ data[x].user.name + '</div></li>');
	}

	//after 4 seconds, start to roll tweets
	setTimeout(function(){
		RollTweets(5, data);
	}, 4000);

	//after 2 seconds, start to roll through usernames
	setTimeout(function(){
		RollTwitterName(5, data);
	}, 2000);

});

//function to roll through tweets
function RollTweets(x, data){
	$('#tweets li').last().fadeOut(500, function(){ //grab last tweet and fade it out
		$(this).remove(); //remove last tweet 
		$('#tweets').slideDown(500, function(){//slide down tweets
			//prepend next tweet 
			$('<li class="panel tweet container-fluid"><div class="col-xs-12"><div class="center-block col-md-2"><img src="' + data[x].user.profile_image_url + '"></div><div class="text col-md-10">' + data[x].text + '</div></div></li>').prependTo($(this)).fadeIn(500);
		});
	});
	//recursive call after 4 seconds to keep rolling through tweets
	setTimeout(function(){
		RollTweets(x+1, data);
	}, 4000);
	return;
};

//function to roll through usernames
function RollTwitterName(x, data){
	$('#TwitterNames li').last().fadeOut(500, function(){ //grab last username and fade out
		$(this).remove(); //remove last username
		$('#TwitterNames').slideDown(500, function(){ //slide down usernames
			//prepend next username in data
			$('<li class="twitterName panel panel-primary"><div class="panel-heading"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> '+ data[x].user.name + '</div></li>').prependTo($(this)).fadeIn(500);
		});
	});
	//recursive call after 2 seconds to keep rolling through usernames
	setTimeout(function(){
		RollTwitterName(x+1, data);
	}, 2000);
	return;
};