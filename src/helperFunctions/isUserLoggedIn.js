export default function isUserLoggedIn(cookie) {
	if (cookie) {
		return true;
	} else {
		return false;
	}
}