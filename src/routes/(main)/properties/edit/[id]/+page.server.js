import { redirect } from "@sveltejs/kit";
import { updatePropertySchema } from "$lib/utils/schemas.js";
import { uploadfile } from "$lib/utils/uploadFile.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, fetch, params }) {
	const res = await fetch(`/api/v1/properties/${params.id}`);
	const { property } = await res.json();

	if (locals.user.id !== property.userId) throw redirect(307, `/properties/${params.id}`);

	return {
		/** @type {import("$lib/types.js").Property} */
		property,
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ fetch, request, params }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = updatePropertySchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			console.log(errors);
			return { errors };
		}

		const res = await fetch(`/api/v1/properties/${result.propertyId}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title: result.name,
				location: result.location,
				description: result.description,
				price: parseInt(result.price),
				photo: result.photo?.size > 0 ? await uploadfile(result.photo) : formData.propertyPhoto,
				type: result.type,
				propertyId: result.propertyId,
			}),
		});
		// const data = await res.json();
		if (res.ok) throw redirect(307, `/properties/${params.id}`);
	},
};
