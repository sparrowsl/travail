/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/v1/users/${params.id}`);
	const { user } = await res.json();

	return { agent: user };
}
