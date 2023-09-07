/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch("/api/v1/properties");
	const { properties } = await res.json();

	return {
		/** @type {import("$lib/types.js").Property[]} */
		properties,
	};
}
