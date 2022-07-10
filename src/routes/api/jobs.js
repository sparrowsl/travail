export function get() {
	// do some compute on the server
	const items = [];

	// if it fails we can return a 400 response
	if (!items) {
		status: 400;
	}

	return {
		status: 200,
		headers: { "Content-Type": "application/json" },
		body: { items }
	};
}
