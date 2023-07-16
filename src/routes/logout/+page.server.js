import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	throw redirect(307, "/");
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: () => {
		throw redirect(307, "/");
	},
};
