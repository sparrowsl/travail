import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	if (!locals.user) {
		redirect(307, "/");
	}

	return { user: locals.user };
}
