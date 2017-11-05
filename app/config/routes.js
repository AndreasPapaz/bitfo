import React from 'react'
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom';

import Main from '../components/Main';


export default (

	<Router>
		<div>
			<Route exact path='/' component={Main} />
		</div>
	</Router>

);