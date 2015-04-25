var AppCompnent = React.createClass({
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
	       		<div className="content">
		       		<HeaderComponent title="New Title"/>
		       		<Container sectionsData = {this.state.data}/>
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
		return {
			title : 'Initial title'
		};
	},
	render : function(){
		console.log("HeaderComponent Render");
		window.headerComponent = this;
		
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
		console.log("Container Render");
		var sectionComponents = this.props.sectionsData.map(function(sectionData, index){
			return (
				<SectionComponent data={sectionData} />
				);
		});
		return (
			<div className="content">
				{sectionComponents}
			</div>
			);
	}
});

var SectionComponent = React.createClass({
	
	render : function(){
		console.log("Section Render");
		return (
			<section>
			<h3>{this.props.data.head}</h3>
			<div>{this.props.data.body}</div>
			</section>
		);
	}	
});



var FooterComponent = React.createClass({

	render : function(){
		console.log("Footer Render");
		return (
			<footer>
				<i>Copyright - Accenture (2015)</i>
			</footer>
			);
	}
});