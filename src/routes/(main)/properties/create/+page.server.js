import { redirect } from "@sveltejs/kit";
import { nanoid } from "nanoid";
import { createPropertySchema } from "$lib/utils/schemas.js";
import { uploadfile } from "$lib/utils/uploadFile.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, fetch }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = createPropertySchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			return { errors };
		}

		const res = await fetch("/api/v1/properties", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: nanoid(),
				title: result.name,
				location: result.location,
				description: result.description,
				price: parseInt(result.price),
				photo: await uploadfile(result.photo),
				type: result.type,
				userId: result.userId,
			}),
		});
		const data = await res.json();

		if (!res.ok) return { errors: { message: data?.message } };

		throw redirect(307, "/properties");
	},
};
