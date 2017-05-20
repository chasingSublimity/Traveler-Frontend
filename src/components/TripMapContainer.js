import React, { Component } from 'react';
import {connect} from 'react-redux';
import TripMap from './TripMap';

class TripMapContainer extends Component {

	render() {
		return (
			<div className="TripMapContainer">
				<p>Look at this fancy-ass map!</p>
				<TripMap />
			</div>
		);
	}

}

// const mapStateToProps = (state, props) => ({

// });

export default connect(/*mapStateToProps*/)(TripMapContainer);