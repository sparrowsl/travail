import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/schemas.js";
import { updatePropertySchema } from "$lib/utils/schemas.js";
import { uploadfile } from "$lib/utils/uploadFile.js";
import { redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const property = await db.query.propertiesTable.findFirst({
		where: eq(propertiesTable.id, params.id),
	});

	// if (locals.user.id !== property.userId)
	// 	redirect(307, `/properties/${params.id}`);

	return { property };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, params }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = updatePropertySchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			return { errors };
		}

		const updated = await db
			.update(propertiesTable)
			.set({
				title: result.name,
				location: result.location,
				description: result.description,
				price: Number.parseInt(result.price),
				photo:
					result.photo?.size > 0 ? await uploadfile(result.photo) : String(formData.propertyPhoto),
				type: String(result.type),
			})
			.where(eq(propertiesTable.id, String(result.propertyId)))
			.returning()
			.get();

		if (updated) {
			redirect(307, `/properties/${params.id}`);
		}
	},
};
