var AppCompnent = React.createClass({
	   render : function(){
	       return (
	       		<div className="content">
	       		<HeaderComponent title="New Title"/>
	       		<Container/>
	       		<FooterComponent/>
	       		</div>
	       	);
	   }
	});

var HeaderComponent = React.createClass({
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
			<header>
				<h1>{this.state.title}</h1>
				<i>To change your future</i>
			</header>
			);
	}
});

var Container = React.createClass({
	render : function(){
		return (
			<div className="content">
				<Section1 />
				<Section2 />
			</div>
			);
	}
});

var Section1 = React.createClass({
	render : function(){
		return (
			<section>
			<h3>Section - 1</h3>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
			</section>
		);
	}	
});

var Section2 = React.createClass({
	render : function(){
		return (
			<section>
			<h3>Section - 2</h3>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
			</section>
		);
	}	
});

var FooterComponent = React.createClass({
	render : function(){
		return (
			<footer>
				<i>Copyright - Accenture (2015)</i>
			</footer>
			);
	}
});