import React from 'react';
import TodosList from './components/TodosList';
import Profile from './components/Profile';
import Users from './components/Users';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<h1>clever programmer here</h1>
				<Link to="/">home</Link>
				<br />
				<Link to="/profile">profile</Link>
				<br />
				<Link to="/users">users</Link>
				<br />

				<Switch>
					<Route exact path="/" component={TodosList} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/users" component={Users} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
