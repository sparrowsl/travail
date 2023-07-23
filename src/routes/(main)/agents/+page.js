/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch("/api/v1/users");
	const data = await res.json();

	return { agents: data.users };
}
