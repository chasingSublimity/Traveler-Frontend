import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Control from 'react-leaflet-control';
import Cookies from 'universal-cookie';

import findMidPoint from '../helperFunctions/findMidPoint';

import * as actions from '../actions/index';
import '../css/TripMap.css';

const cookies = new Cookies();

// static values, so these arent included in the store
const stamenTonerTiles = 'http://tile.stamen.com/toner/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

class TripMap extends Component {
	constructor(props)  {
		super(props);
		this.handleUpPanClick = this.handleUpPanClick.bind(this);
		this.handleRightPanClick = this.handleRightPanClick.bind(this);
		this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
		this.handleDownPanClick = this.handleDownPanClick.bind(this);
	}

	componentDidMount() {
		// handle zoom level
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.on('zoomend', () => {
			const updatedZoomLevel = leafletMap.getZoom();
			// fire action to set zoom level in redducer
			this.props.dispatch(actions.setZoomLevel(updatedZoomLevel));
		});

		// handle AJAX requests post-refresh
		// if a cookie is set, a get request to the server is fired off to populate the memories
		const tripIdInCookie = cookies.get('selectedTripId');
		if (tripIdInCookie) {
			this.props.dispatch(actions.selectTrip(tripIdInCookie))
				.then(() => {
					// after memories are stored in state, run helper function to determine midpoint and fire action
					// to set midpoint in state
					const lastMemoryIndex = (this.props.memories.length) - 1;
					const firstMemoryLocation = JSON.parse(this.props.memories[0].location);
					const secondMemoryLocation = JSON.parse(this.props.memories[lastMemoryIndex].location);
					const midPoint = findMidPoint(...firstMemoryLocation, ...secondMemoryLocation);
					this.props.dispatch(actions.setMapCenter(midPoint));
				});
		}
	}

	handleUpPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([0, -100]);
		console.log('panning up');
	}

	handleRightPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([100, 0]);
		console.log('Panning right');
	}

	handleLeftPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([-100, 0]);
		console.log('Panning left');
	}

	handleDownPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([0, 100]);
		console.log('Panning down');
	}


	render() {

		const memoryMarkers = this.props.memories.map((memory, index) => {
			const location = JSON.parse(memory.location);	
			return (
				<Marker key={index} position={location}>
					<Popup maxWidth="none" >
						<div>
							<img className="memory-image" src={memory.imgUrl} alt={'Image comment: ' + memory.comments} />
							<br/>
							<span>{memory.comments}</span>
						</div>
					</Popup>
				</Marker>
			);
		});

		return (
			<div>
				<Map
					ref={m => {this.leafletMap = m;}}
					center={this.props.mapCenter}
					zoom={this.props.mapZoomLevel}
				>
					<TileLayer
						attribution={stamenTonerAttr}
						url={stamenTonerTiles}
					/>

					{memoryMarkers}

					<Control position="topright" >
						<div 
							style={{
								padding: '5px',
							}}
						>
							<div style={{ marginLeft: '37px' }}>
								<button className="pan-button" onClick={this.handleUpPanClick}>
									Pan up
								</button>
							</div>
							<div>
								<button className="pan-button" onClick={this.handleLeftPanClick}>
									Pan left
								</button>
								<button className="pan-button" onClick={this.handleRightPanClick}>
									Pan right
								</button>
							</div>
							<div style={{ marginLeft: '30px' }}>
								<button className="pan-button" onClick={this.handleDownPanClick}>
									Pan down
								</button>
							</div>
						</div>
					</Control>
				</Map>
			</div>
		); 
	}
}

const mapStateToProps = (state, props) => ({
	selectedTrip: state.main.selectedTrip,
	memories: state.main.memories,
	selectedMemory: state.main.selectedMemory,
	mapZoomLevel: state.main.mapZoomLevel,
	mapCenter: state.main.mapCenter
});

export default connect(mapStateToProps)(TripMap);