import { redirect } from "@sveltejs/kit";

/** @type {import('../(main)/$types').LayoutServerLoad} */
export async function load({ locals }) {
	if (!locals.user) {
		redirect(307, "/");
	}

	return { user: locals.user };
}
