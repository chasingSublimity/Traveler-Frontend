export default function findMidpoint(lat1, long1, lat2, long2) {
	return [lat1 + (lat2 - lat1) * .5, long1 + (long2 - long1) * .5];
}