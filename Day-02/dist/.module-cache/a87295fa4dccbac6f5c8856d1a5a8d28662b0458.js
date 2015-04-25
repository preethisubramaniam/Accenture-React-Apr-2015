var AppCompnent = React.createClass({displayName: "AppCompnent",
	   render : function(){
	       return (
	       		React.createElement("div", {class: "content"}, 
	       		React.createElement(Header, null), 
	       		React.createElement(Container, null), 
	       		React.createElement(Footer, null)
	       		)
	       	);
	   }
	});

var Header = React.createClass({displayName: "Header",
	render : function(){
		return (
			React.createElement("header", null, 
				React.createElement("h1", null, "My Application"), 
				React.createElement("i", null, "To change your future")
			)
			);
	}
});

var Container = React.createClass({displayName: "Container",
	render : function(){
		return (
			React.createElement("div", null, 
				React.createElement(Section1, null), 
				React.createElement(Section2, null)
			)
			);
	}
});

var Section1 = React.createClass({displayName: "Section1",
	render : function(){
		return (
			React.createElement("section", null, 
			React.createElement("h3", null, "Section - 1"), 
			React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
			)
		);
	}	
});

var Section2 = React.createClass({displayName: "Section2",
	render : function(){
		return (
			React.createElement("section", null, 
			React.createElement("h3", null, "Section - 2"), 
			React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
			)
		);
	}	
});

var Footer = React.createClass({displayName: "Footer",
	render : function(){
		return (
			React.createElement("footer", null, 
				React.createElement("i", null, "Copyright - Accenture (2015)")
			)
			);
	}
});