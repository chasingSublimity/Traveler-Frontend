import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import store from './store';
import App from './components/App';
import UserCreate from './components/UserCreate';
import TripCreate from './components/TripCreate';
import MemoryCreate from './components/MemoryCreate';
import './css/index.css';

const routes = (
	<Router>
		<div>
			<div className="header">
				<h2 className="header-title">Traveler</h2>
			</div>


			<Route exact path="/" component={App} />
			<Route path="/new-user" component={UserCreate} />
			<Route path="/new-trip" component={TripCreate} />
			<Route path="/new-memory" component={MemoryCreate} />

			<div className="links">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/new-user">New User</Link></li>
					<li><Link to="/new-trip">New Trip</Link></li>
					<li><Link to="/new-memory">New Memory</Link></li>
				</ul>
				
			</div>
			
		</div>

	</Router>
);


ReactDOM.render(
	<Provider store={store}>
		{routes}
  </Provider>,
  document.getElementById('root')
);
