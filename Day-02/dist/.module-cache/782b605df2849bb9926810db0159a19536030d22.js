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
	componentWillMount : function(){
		this.setState({title : "Title at component mount"});
	},
	getInitialState : function(){
		console.log("getInitialState triggered");
		return {
			title : 'Initial title'
		};
	},
	render : function(){
		window.headerComponent = this;
		console.log("header component rendered!");
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
		var sectionData = {
			head : "Section header from container",
			body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		};
		return (
			React.createElement("div", {className: "content"}, 
				React.createElement(SectionComponent, {data: sectionData})
			)
			);
	}
});

var SectionComponent = React.createClass({displayName: "SectionComponent",
	getInitialState : function(){
		return ;
	},
	render : function(){
		return (
			React.createElement("section", null, 
			React.createElement("h3", null, this.state.head), 
			React.createElement("div", null, this.state.body)
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