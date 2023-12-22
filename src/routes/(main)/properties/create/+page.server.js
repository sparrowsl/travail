import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/schemas.js";
import { createPropertySchema } from "$lib/utils/schemas.js";
import { uploadfile } from "$lib/utils/uploadFile.js";
import { redirect } from "@sveltejs/kit";
import { nanoid } from "nanoid";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = createPropertySchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			return { errors };
		}

		const property = await db
			.insert(propertiesTable)
			.values({
				id: nanoid(),
				title: result.name,
				location: result.location,
				description: result.description,
				price: parseInt(result.price),
				photo: await uploadfile(result.photo),
				type: String(result.type),
				userId: result.userId,
			})
			.returning()
			.get();

		if (!property) return { errors: { message: "Can't create property currently!!" } };

		redirect(307, "/properties");
	},
};
