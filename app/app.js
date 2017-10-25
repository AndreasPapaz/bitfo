import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const routes = require('./config/routes');
class App extends Component {
	render(){
		return (
			<div>Hello World</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));