README Christopher Renus

- The html of the page is very simple. Each ticker is an <ul> and each element within is made up of <li>.
- Bootstrap is used within the whole page. The content is all within a .container to allow for ample spacing
	from the edges. In addition the tickers each use .col to keep things reflexive. The ticker for usernames 
	is made up Bootstrap panel components to give it a nice setup as well as using Bootstrap glyphicons. Lastly
	the page utilizes a bootstrap nav bar to display the twitter logo with a fixed width.
- The javascript utilizes the jquery getJSON function to grab all the data from the JSON file. From there, it inserts
	the initial HTML into the page for each ticker. Next it calls functions that will start rolling the feeds. For timers
	I used the setTimeout() function which executes the internal function after a set amount of time. For the animations
	on the tickers I used jQuery animations (fadeOut, slideUp, fadeIn). Recursion was used for my functions in order to 
	keep the calls for the tickers synchronous. 

- The Twitter JSON format was straight forward and was easy to understand what was what and how it was structured. 