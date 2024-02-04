import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/models.js";
import { uploadfile } from "$lib/utils/uploadFile.js";
import { propertySchema } from "$lib/utils/validation.js";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		/** @type {import("$lib/types.js").Property} */
		let property;
		try {
			property = propertySchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = /** @type {import("zod").ZodError} */ (e).flatten();

			return { errors: Object.values(errors).flat() };
		}

		await db
			.insert(propertiesTable)
			.values({
				photo: await uploadfile(property.photo),
				description: property.description,
				location: property.location,
				price: property.price,
				title: property.title,
				type: property.type,
				userId: property.userId,
			})
			.returning()
			.catch((error) => {
				console.info(error);
				return { errors: "Cannot create property!!" };
			});
	},
};
