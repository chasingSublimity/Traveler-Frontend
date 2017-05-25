import React, { Component } from 'react';
import {/*BrowserRouter as */Router, Route, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import history from '../history';

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
		<Router history={history}>
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
			</div>
		</Router>
		);
	}
}
