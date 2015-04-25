var MyFirstComponent = React.createClass({displayName: "MyFirstComponent",
	   render : function(){
	       return (
	       		React.createElement("div", null, 
	       			React.createElement("h1", null, "Hi there!"), 
	       			React.createElement("hr", null), 
	       			React.createElement("small", null, "This is some sample text")
	       		 )
	       	);
	   }
	});