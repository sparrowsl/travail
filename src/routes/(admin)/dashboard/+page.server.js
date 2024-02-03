/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	async function getProperties() {
		const res = await fetch("/api/v1/properties");
		const { properties } = await res.json();
		return properties;
	}

	return {
		properties: getProperties(),
	};
}
