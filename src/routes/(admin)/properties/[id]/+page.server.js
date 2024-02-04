import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/models.js";
import { redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const property = await db.query.propertiesTable.findFirst({
		where: eq(propertiesTable.id, params.id),
		with: {
			agent: {
				columns: {
					password: false,
				},
			},
		},
	});

	return { property };
}

/** @type {import('./$types').Actions} */
export const actions = {
	deleteProperty: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		await db
			.delete(propertiesTable)
			.where(eq(propertiesTable.id, String(formData.propertyId)))
			.returning();

		redirect(307, "/properties");
	},
};
