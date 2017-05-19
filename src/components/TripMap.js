import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../actions/index';
// import '../css/TripMap.css';

class TripMap extends Component {

	render() {
		return (
			<div>
				<p>Look at this fancy ass map!</p>
			</div>
		); 
	}
}

// const mapStateToProps = (state, props) => ({

// });

export default connect(/*mapStateToProps*/)(TripMap);