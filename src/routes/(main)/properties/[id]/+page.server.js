import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/v1/properties/${params.id}`);
	const { property } = await res.json();

	return {
		/** @type {import("$lib/types.js").Property} */
		property,
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	deleteProperty: async ({ request, fetch }) => {
		const formData = Object.fromEntries(await request.formData());

		const res = await fetch(`/api/v1/properties/${formData.propertyId}`, { method: "DELETE" });
		if (!res.ok) return;

		throw redirect(307, "/properties");
	},
};
