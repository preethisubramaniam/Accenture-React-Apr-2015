var AppCompnent = React.createClass({displayName: "AppCompnent",
	   componentWillMount : function(){
	   		window.app = this;
	   },
	   getInitialState : function(){
	   		var sectionsData =[{
				head : "Section header - 1",
				body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			}, {
				head : "Section header - 2",
				body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			}, {
				head : "Section header - 3",
				body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			}];
			return {data : sectionsData};
	   },
	   render : function(){
	   	   console.log("AppComponent Render");
	       return (
	       		React.createElement("div", {className: "content"}, 
	       		React.createElement(HeaderComponent, {title: "New Title"}), 
	       		React.createElement(Container, {sectionsData: this.state.data}), 
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
		console.log("HeaderComponent Render");
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
		console.log("Container Render");
		var sectionComponents = this.props.sectionsData.map(function(sectionData, index){
			return (
				React.createElement(SectionComponent, {data: sectionData})
				);
		});
		return (
			React.createElement("div", {className: "content"}, 
				sectionComponents
			)
			);
	}
});

var SectionComponent = React.createClass({displayName: "SectionComponent",
	
	render : function(){
		console.log("Section Render");
		return (
			React.createElement("section", null, 
			React.createElement("h3", null, this.props.data.head), 
			React.createElement("div", null, this.props.data.body)
			)
		);
	}	
});



var FooterComponent = React.createClass({displayName: "FooterComponent",

	render : function(){
		console.log("Footer Render");
		return (
			React.createElement("footer", null, 
				React.createElement("i", null, "Copyright - Accenture (2015)")
			)
			);
	}
});