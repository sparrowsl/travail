import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/models.js";
import { desc } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const properties = await db.query.propertiesTable.findMany({
		orderBy: desc(propertiesTable.createdAt),
	});

	return { properties };
}
