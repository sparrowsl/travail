import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/models.js";
import { uploadfile } from "$lib/utils/uploadFile.js";
import { propertySchema } from "$lib/utils/validation.js";
import { redirect } from "@sveltejs/kit";
import dayjs from "dayjs";
import { eq } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const property = await db.query.propertiesTable.findFirst({
		where: eq(propertiesTable.id, params.id),
	});

	if (!property) {
		return redirect(307, "/properties");
	}

	// if (locals.user.id !== property.userId)
	// 	redirect(307, `/properties/${params.id}`);

	return { property };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		/** @type {import("$lib/types.js").Property} */
		let property;
		try {
			property = propertySchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = /** @type {import("zod").ZodError} */ (
				e
			).flatten();

			return { errors: Object.values(errors).flat() };
		}

		await db
			.update(propertiesTable)
			.set({
				title: property.title,
				location: property.location,
				description: property.description,
				price: property.price,
				type: property.type,
				photo:
					property.photo?.size > 0
						? await uploadfile(property.photo)
						: String(formData.propertyPhoto),
				updatedAt: dayjs(property.updatedAt).format(),
			})
			.where(eq(propertiesTable.id, String(formData.propertyId)))
			.returning()
			.catch((/** @type {any} */ _) => {
				return { errors: "Cannot update this property" };
			});
	},
};
