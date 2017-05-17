import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import store from './store';
import App from './components/App';
import LandingPage from './components/LandingPage';
import UserCreate from './components/UserCreate';
import TripCreate from './components/TripCreate';
import MemoryCreate from './components/MemoryCreate';
import LoginScreen from './components/LoginScreen';
import TripView from './components/TripView';
import './css/index.css';

const routes = (
	<Router>

		<div>
			<Route exact path="/" component={LandingPage} />
			<Route path="/new-user" component={UserCreate} />
			<Route path="/new-trip" component={TripCreate} />
			<Route path="/new-memory" component={MemoryCreate} />
			<Route path="/login" component={LoginScreen} />
			<Route path="/trips" component={TripView} />

			<div className="links">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/new-user">New User</Link></li>
					<li><Link to="/new-trip">New Trip</Link></li>
					<li><Link to="/new-memory">New Memory</Link></li>
					<li><Link to="/login">Login</Link></li>
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
