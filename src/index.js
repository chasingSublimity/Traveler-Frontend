import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

import store from './store';
import './css/index.css';
import isUserLoggedIn from './helperFunctions/isUserLoggedIn';

import App from './components/App';
import LandingPage from './components/LandingPage';
import UserCreate from './components/UserCreate';
import TripCreate from './components/TripCreate';
import MemoryCreate from './components/MemoryCreate';
import LoginScreen from './components/LoginScreen';
import TripView from './components/TripView';

const cookies = new Cookies();
// returns a boolean based on whether or not a cookie is set.
// This boolean is then used to determine redirects in the router below
const loggedIn = isUserLoggedIn(cookies.get('userName'));

const routes = (
	<Router>

		<div>
			<Route exact path="/" component={LandingPage} />
			<Route path="/login" component={LoginScreen} />
			<Route path="/new-user" component={UserCreate} />
			<Route path="/new-trip" render={() => (
															loggedIn ? (<TripCreate />) : 
																				(<Redirect to="/login"/>)
															)} />

			<Route path="/new-memory"render={() => (
															loggedIn ? (<MemoryCreate />) : 
																				(<Redirect to="/login"/>)
															)} />

			<Route path="/trips" render={() => (
															loggedIn ? (<TripView />) : 
																				(<Redirect to="/login"/>)
															)} />

			<div className="links">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/new-user">New User</Link></li>
					<li><Link to="/new-trip">New Trip</Link></li>
					<li><Link to="/new-memory">New Memory</Link></li>
					<li><Link to="/trips">Trips</Link></li>
				</ul>
			</div>
		</div>

	</Router>
);


ReactDOM.render(
	<Provider store={store}>
		<App>
			{routes}
		</App>
  </Provider>,
  document.getElementById('root')
);
