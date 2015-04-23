  var React = require('react'),
  TweetsApp = require('./components/resultsGrid'),
  jsonObj = require("./results/sites.json");

module.exports = {

  index: function(req, res) {

    var markup = helloWorld;

    res.render('views/index', { markup: markup });



/*
// Call static model method to get tweets in the db
Tweet.getTweets(0,0, function(tweets, pages) {

  // Render React to a string, passing in our fetched tweets
  var markup = React.renderComponentToString(
    TweetsApp({
      tweets: tweets
    })
  );

  // Render our 'home' template
  res.render('home', {
    markup: markup, // Pass rendered react markup
    state: JSON.stringify(tweets) // Pass current state to client side
  });

});
*/

  }

}