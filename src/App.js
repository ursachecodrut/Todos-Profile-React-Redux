import React from 'react';
import TodosList from './components/TodosList';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<h1>clever programmer here</h1>
				<Link to="/">home</Link>
				<br />
				<Link to="/profile">profile</Link>

				<Switch>
					<Route exact path="/" component={TodosList} />
					<Route exact path="/profile" component={Profile} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
