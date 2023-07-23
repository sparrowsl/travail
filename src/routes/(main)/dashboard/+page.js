/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	async function getProperties() {
		const res = await fetch("/api/v1/properties");
		const { properties } = await res.json();
		return properties.slice(0, 4);
	}

	return {
		streamed: {
			properties: getProperties(),
		},
	};
}
