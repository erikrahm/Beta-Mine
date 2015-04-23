var React = require('react')


var hello = React.createClass({
  render: function() {
    return (
      <h1 className="what">
        Hello, world! I am a CommentBox.
      </h1>
    );
  }
});

// tutorial1.js
module.exports = helloWorld = React.createClass({
  render: function() {
    return (
    	<div className="who">
        	<hello />
      	</div>
    );
  }
});