import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

import isUserLoggedIn from '../helperFunctions/isUserLoggedIn';

import Navbar from './Navbar';
import LandingPage from './LandingPage';
import UserCreate from './UserCreate';
import TripCreate from './TripCreate';
import MemoryCreate from './MemoryCreate';
import LoginScreen from './LoginScreen';
import TripView from './TripView';
import TripMapContainer from './TripMapContainer';

const cookies = new Cookies();

// render function in the routes handles auth-based redirection
// if no data is set in cookie, the user is redirected to the login page

export default class App extends Component {

	render() {
		return (
		<Router>
			<div>
				<Navbar />
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/login" component={LoginScreen} />
				<Route exact path="/new-user" component={UserCreate} />
				<Route exact path="/new-trip" render={() => (
																isUserLoggedIn(cookies.get('userName')) ? (<TripCreate />) : 
																					(<Redirect to="/login"/>)
																)} />

				<Route exact path="/new-memory"render={() => (
																isUserLoggedIn(cookies.get('userName')) ? (<MemoryCreate />) : 
																					(<Redirect to="/login"/>)
																)} />

				<Route exact path="/trips" render={() => (
																isUserLoggedIn(cookies.get('userName')) ? (<TripView />) : 
																					(<Redirect to="/login"/>)
																)} />

				<Route exact path="/map" component={TripMapContainer} />

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
	}
}
