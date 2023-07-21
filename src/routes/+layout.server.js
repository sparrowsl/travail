/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	console.log(locals.user);

	return { user: locals.user };
}
