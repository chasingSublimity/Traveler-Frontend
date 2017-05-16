import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment-timezone';
import * as actions from '../actions/index';
import TripCard from './TripCard';
// import '../css/TripView.css';

class TripCreate extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		// dispatch action that makes post request to /trips
		this.props.dispatch(actions.loadTripViewPage(this.props.userName));
	}

	render() {
		// guess timezone for use in date conversion
		// const timezone = moment.tz.guess();
		// map trips in store to array in props
		// and then render array as trip cards
		let trips = this.props.trips.map((trip, index) => {
			// use moment to convert date to local timezone
			const beginDate = moment(trip.beginDate).format('MMMM Do YYYY');
			const endDate = moment(trip.endDate).format('MMMM Do YYYY');

			return <TripCard key={index} origin={trip.origin} 
																	destination={trip.destination}
																	beginDate={beginDate}
																	endDate={endDate}
																	/>;
		});
		return (
			<div className="TripView">
				<p>Look at this fancy-ass display!</p>
				{trips}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	userName: state.main.userName,
	trips: state.main.trips
});

export default connect(mapStateToProps)(TripCreate);