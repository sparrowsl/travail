/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/v1/properties/${params.id}`);
	const { property } = await res.json();

	return {
		/** @type {import("$lib/types.js").Property} */
		property,
	};
}
