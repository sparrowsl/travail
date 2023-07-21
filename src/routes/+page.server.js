import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({}) => {},
	logout: async ({ cookies }) => {
		cookies.set("session", "", { path: "/" });
		console.log("Logged out..");
		throw redirect(307, "/");
	},
};
