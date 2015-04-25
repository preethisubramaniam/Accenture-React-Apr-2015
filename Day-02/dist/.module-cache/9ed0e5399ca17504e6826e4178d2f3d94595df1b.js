var AppCompnent = React.createClass({displayName: "AppCompnent",
	   render : function(){
	       return (
	       		React.createElement("div", {className: "content"}, 
	       		React.createElement(HeaderComponent, {title: "New Title"}), 
	       		React.createElement(Container, null), 
	       		React.createElement(FooterComponent, null)
	       		)
	       	);
	   }
	});

var HeaderComponent = React.createClass({displayName: "HeaderComponent",
	render : function(){
		window.headerComponent = this;
		return (
			React.createElement("header", null, 
				React.createElement("h1", null, this.state.title), 
				React.createElement("i", null, "To change your future")
			)
			);
	}
});

var Container = React.createClass({displayName: "Container",
	render : function(){
		return (
			React.createElement("div", {className: "content"}, 
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

var FooterComponent = React.createClass({displayName: "FooterComponent",
	render : function(){
		return (
			React.createElement("footer", null, 
				React.createElement("i", null, "Copyright - Accenture (2015)")
			)
			);
	}
});