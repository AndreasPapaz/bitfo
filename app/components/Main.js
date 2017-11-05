import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

// Test Area
import Chart from './Chart'

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentWillMount() {

	}

	render() {
		return(
			<div>
				<Chart />
			</div>
		);
	}

};