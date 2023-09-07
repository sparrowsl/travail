/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, fetch }) {
	const res = await fetch(`/api/v1/users/${locals.user.id}`);
	const { user } = await res.json();

	return { currentUser: user };
}
