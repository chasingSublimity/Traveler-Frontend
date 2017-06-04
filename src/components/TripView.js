import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment-timezone';
import {GridList} from 'material-ui/GridList';
import Cookies from 'universal-cookie';

import * as actions from '../actions/index';
import TripCard from './TripCard';
import '../css/TripView.css';

const cookies = new Cookies();

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	gridList: {
		width: 500,
		height: 450,
		overflowY: 'auto',
		margin: '20px'
	}
};

class TripView extends Component {

	// weird async bug here has to do with speed. Ask about it
	componentDidMount() {
		// dispatch action that makes post request to /trips
		const userNameInCookie = cookies.get('userName');
		this.props.dispatch(actions.loadTripViewPage(userNameInCookie));
	}

	render() {
		// map trips in store to array in props
		// and then render array as trip cards
		let trips = this.props.trips.map((trip, index) => {
			// use moment to convert date to local timezone
			const beginDate = moment(trip.beginDate).format('MM/DD/YYYY');
			const endDate = moment(trip.endDate).format('MM/DD/YYYY');

			return <TripCard key={index} 
												id={trip.id} 
												origin={trip.origin} 
												destination={trip.destination}
												beginDate={beginDate}
												endDate={endDate}
												/>;
		});

		return (
			<div style={styles.root} className="TripView">
				<GridList
					cellHeight={180}
					style={styles.gridList}
				>
					{trips}
				</GridList>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	userName: state.main.userName,
	trips: state.main.trips
});

export default connect(mapStateToProps)(TripView);