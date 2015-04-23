var React = require('react')


var hello = React.createClass({displayName: "hello",
  render: function() {
    return (
      React.createElement("h1", {className: "what"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});

// tutorial1.js
module.exports = helloWorld = React.createClass({displayName: "helloWorld",
  render: function() {
    return (
    	React.createElement("div", {className: "who"}, 
        	React.createElement("hello", null)
      	)
    );
  }
});