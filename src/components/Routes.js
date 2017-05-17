import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

import isUserLoggedIn from '../helperFunctions/isUserLoggedIn';

import LandingPage from './LandingPage';
import UserCreate from './UserCreate';
import TripCreate from './TripCreate';
import MemoryCreate from './MemoryCreate';
import LoginScreen from './LoginScreen';
import TripView from './TripView';

const cookies = new Cookies();
// returns a boolean based on whether or not a cookie is set.
// This boolean is then used to determine redirects in the router below

// is it better just to check the store here?
const loggedIn = isUserLoggedIn(cookies.get('userName'));

export const routes = (
	<Router>

		<div>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/login" component={LoginScreen} />
			<Route exact path="/new-user" component={UserCreate} />
			<Route exact path="/new-trip" render={() => (
															loggedIn ? (<TripCreate />) : 
																				(<Redirect to="/login"/>)
															)} />

			<Route exact path="/new-memory"render={() => (
															loggedIn ? (<MemoryCreate />) : 
																				(<Redirect to="/login"/>)
															)} />

			<Route exact path="/trips" render={() => (
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