import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Control from 'react-leaflet-control';

import findMidPoint from '../helperFunctions/findMidPoint';

import * as actions from '../actions/index';
import '../css/TripMap.css';

const zoomLevel = 5;
const position1 = [32.7555, -97.3308];
const position2 = [42.7555, -97.3308];

// helper functions finds a rough middle point between two coordinates.
// we use this to set the map center to somewhere inbetween the destination and origin.
const mapCenter = findMidPoint(...position1, ...position2);



const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

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
			console.log(updatedZoomLevel);
			// fire action to set zoom level in redducer
			this.props.dispatch(actions.setZoomLevel(updatedZoomLevel));
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
		console.log('memories: ', this.props.memories);

		const memoryMarkers = this.props.memories.map((memory, index) => {
			const location = JSON.parse(memory.location);	
			return (
				<Marker key={index} position={location}>
					<Popup>
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
					center={mapCenter}
					zoom={zoomLevel}
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
	mapZoomLevel: state.main.mapZoomLevel
});

export default connect(mapStateToProps)(TripMap);