import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import Control from 'react-leaflet-control';

import * as actions from '../actions/index';
// import '../css/TripMap.css';

// need to have a map container component
class TripMap extends Component {
	constructor(props)  {
		super(props);
		this.handleUpPanClick = this.handleUpPanClick.bind(this);
		this.handleRightPanClick = this.handleRightPanClick.bind(this);
		this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
		this.handleDownPanClick = this.handleDownPanClick.bind(this);
	}

	componentDidMount() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.on('zoomend', () => {
			const updatedZoomLevel = leafletMap.getZoom();
			// fire action to set zoom level in redducer
		});
	}

	handleUpPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([0, -100]);
		console.log('panning up');
	}

	handleRightPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([100, 0]);
		window.console.log('Panning right');
	}

	handleLeftPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([-100, 0]);
		window.console.log('Panning left');
	}

	handleDownPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([0, 100]);
		window.console.log('Panning down');
	}


	render() {
		return (
			<div>
				<p>Look at this fancy ass map!</p>
			</div>
		); 
	}
}

const mapStateToProps = (state, props) => ({
	selectedTrip: state.main.selectedTrip,
	memories: state.main.memories,
	selectedMemory: state.main.selectedMemory
});

export default connect(/*mapStateToProps*/)(TripMap);