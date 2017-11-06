import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import helper from './utils/helpers';

// Test Area
// import Chart from './Chart'

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentWillMount() {
		console.log("DID MOUNT")
		helper.some_test().then(function(res) {
			console.log('from the helper');
			console.log(res)
		});
	}

	// componentDidMount() {
	// 	helpers.runQuery().then(function(res) {
	// 		console.log('from the helper');
	// 		console.log(res)
	// 	});
	// }

	render() {
		return(
			<div>
				<h1>TWITTER HELP</h1>
			</div>
		);
	}

};