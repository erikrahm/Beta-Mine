var request = require("request"),
	cheerio = require("cheerio"),
	fs = require('fs'),
	url = "https://www.google.com/search?q=miami+jet+ski+rental&start=0",
	outputFilename = './results/what.json',
	container = [],
	individual = {};
 
function callback () {
	
	var sites = [];

	sites.push({
		Sites: container
	});

	fs.writeFile(outputFilename, JSON.stringify(sites, null, 4), function(error) {
	    if(error) {
	      console.log(error.message);
	    } else {
	      console.log("JSON saved to " + outputFilename);
	    }
	});
}
 
request(url, function (error, response, body) {
	if (error) {
		console.log("Couldn’t get page because of error:"  + error.message);
		return;
	}
	
	// load the body of the page into Cheerio so we can traverse the DOM
	var $ = cheerio.load(body),
		links = $(".r a");
		
	links.each(function (i, link) {
		// get the href attribute of each link
		var url = $(link).attr("href");
		
		// strip out unnecessary junk
		url = url.replace("/url?q=", "").split("&")[0];
		
		if (url.charAt(0) === "/") {
			return;
		}
		
		// download that page
		request(url, function (error, response, body) {
			if (error) {
				console.log("Couldn’t get page because of error:" + error.message);
				return;
			}
			
			// load the page into cheerio
			var $page = cheerio.load(body),
				text = $page("body").text(),
				title = $page("title").html();

				numbers = text.replace(/[^0-9]/g, '');

				individual["Site Title"] = title;

				individual["Site Numbers"] = numbers;

				container.push({
					Title: individual["Site Title"],
					Numbers: individual["Site Numbers"]
				});

				console.log(container);
			/* throw away extra whitespace and non-alphanumeric characters
			text = text.replace(/\s+/g, " ")
					   .replace(/[^a-zA-Z ]/g, "");
			
			// split on spaces for a list of all the words on that page and 
			// loop through that list
			text.split(" ").forEach(function (word) {
				// we don't want to include very short or long words, as they're 
				// probably bad data
				if (word.length < 2 || word.length > 20) {
					return;
				}
				
				if (corpus[word]) {
					// if this word is already in our "corpus", our collection
					// of terms, increase the count by one
					corpus[word]++;
				} else {
					// otherwise, say that we've found one of that word so far
					corpus[word] = 1;
				}
			}); */
			
			// and when our request is completed, call the callback to wrap up!
			callback();
		});
	});
});